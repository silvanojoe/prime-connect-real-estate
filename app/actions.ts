"use server"

import { createClient } from "@/lib/supabase/server"

export interface ActionResult {
  success: boolean
  message: string
}

export async function submitLead(formData: FormData): Promise<ActionResult> {
  const payload = {
    full_name: String(formData.get("full_name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    country: String(formData.get("country") || "").trim(),
    budget_range: String(formData.get("budget_range") || "").trim(),
    property_type: String(formData.get("property_type") || "").trim(),
    market_type: String(formData.get("market_type") || "").trim(),
    preferred_community: String(formData.get("preferred_community") || "").trim(),
    message: String(formData.get("message") || "").trim(),
    source: String(formData.get("source") || "website"),
  }

  if (!payload.full_name || !payload.email) {
    return { success: false, message: "Please provide your name and email." }
  }

  try {
    const supabase = await createClient()
    const { error } = await supabase.from("leads").insert(payload)
    if (error) {
      console.log("[v0] submitLead error:", error.message)
      return { success: false, message: "Something went wrong. Please try again." }
    }
    return {
      success: true,
      message: "Thank you. One of our advisors will contact you shortly.",
    }
  } catch (err) {
    console.log("[v0] submitLead exception:", err)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

export async function submitConsultation(formData: FormData): Promise<ActionResult> {
  const payload = {
    full_name: String(formData.get("full_name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    country: String(formData.get("country") || "").trim(),
    preferred_date: String(formData.get("preferred_date") || "").trim(),
    preferred_time: String(formData.get("preferred_time") || "").trim(),
    investment_goal: String(formData.get("investment_goal") || "").trim(),
    budget_range: String(formData.get("budget_range") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  }

  if (!payload.full_name || !payload.email) {
    return { success: false, message: "Please provide your name and email." }
  }

  try {
    const supabase = await createClient()
    const { error } = await supabase.from("consultations").insert(payload)
    if (error) {
      console.log("[v0] submitConsultation error:", error.message)
      return { success: false, message: "Something went wrong. Please try again." }
    }
    return {
      success: true,
      message: "Your consultation request has been received. We will confirm your slot soon.",
    }
  } catch (err) {
    console.log("[v0] submitConsultation exception:", err)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

export async function submitViewing(formData: FormData): Promise<ActionResult> {
  const payload = {
    full_name: String(formData.get("full_name") || "").trim(),
    email: String(formData.get("email") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    property_slug: String(formData.get("property_slug") || "").trim(),
    property_title: String(formData.get("property_title") || "").trim(),
    preferred_date: String(formData.get("preferred_date") || "").trim(),
    message: String(formData.get("message") || "").trim(),
  }

  if (!payload.full_name || !payload.email) {
    return { success: false, message: "Please provide your name and email." }
  }

  try {
    const supabase = await createClient()
    const { error } = await supabase.from("viewings").insert(payload)
    if (error) {
      console.log("[v0] submitViewing error:", error.message)
      return { success: false, message: "Something went wrong. Please try again." }
    }
    return {
      success: true,
      message: "Thank you. We will reach out to schedule your viewing.",
    }
  } catch (err) {
    console.log("[v0] submitViewing exception:", err)
    return { success: false, message: "Something went wrong. Please try again." }
  }
}
