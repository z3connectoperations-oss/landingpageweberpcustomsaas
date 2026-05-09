// Lead Service — Handles all Firestore operations for lead capture
// Each landing page writes to the "leads" collection with a unique `landingPageId`
// to distinguish leads from different landing pages within the same Firebase project.

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// ─── Landing Page Identifier ────────────────────────────────────────────────
// Each landing page MUST have a unique ID. This ID is used to filter leads
// in the shared Firestore database across all Z3 landing pages.
const LANDING_PAGE_ID = "z3connect-erp-custom-saas";

// ─── Lead Schema Type ───────────────────────────────────────────────────────
export interface LeadData {
  // ── Contact Information ──
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  country: string;

  // ── Acquisition / UTM Tracking ──
  source: string;       // e.g. "Meta Ads", "Google Ads", "Organic", "Direct"
  campaign: string;     // e.g. "ERP Launch Campaign", "Custom SaaS Q2"

  // ── Business / Enquiry Details ──
  industry: string;     // e.g. "Manufacturing", "Ecommerce", "Hospital & Clinic"
  enquiryFor: string;   // e.g. "Custom ERP", "SaaS Development", "Web App"
  product: string;      // e.g. "Inventory Management", "CRM System"

  // ── Internal Fields (auto-set, not from form) ──
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  landingPageId: string;
  createdAt: ReturnType<typeof serverTimestamp>;
}

// ─── Submit Lead to Firestore ───────────────────────────────────────────────
export async function submitLead(formInput: {
  name: string;
  phone: string;
  email: string;
  businessType: string;  // maps to → industry
  requirement: string;   // maps to → enquiryFor
}): Promise<{ success: boolean; docId?: string; error?: string }> {
  try {
    // Extract UTM params from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get("utm_source") || "Direct";
    const utmCampaign = urlParams.get("utm_campaign") || "";

    const leadData: LeadData = {
      // Contact info from form
      name: formInput.name,
      phone: formInput.phone,
      email: formInput.email,
      city: "",          // Can be collected later or via IP geolocation
      state: "",         // Can be collected later or via IP geolocation
      country: "",       // Can be collected later or via IP geolocation

      // Acquisition tracking (auto-captured from URL)
      source: utmSource,
      campaign: utmCampaign,

      // Business details from form
      industry: formInput.businessType,
      enquiryFor: formInput.requirement || "General Enquiry",
      product: "Custom SaaS / ERP",  // Default for this landing page

      // Internal fields
      status: "new",
      landingPageId: LANDING_PAGE_ID,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "leads"), leadData);
    console.log("Lead stored successfully:", docRef.id);
    return { success: true, docId: docRef.id };
  } catch (error) {
    console.error("Error storing lead:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
