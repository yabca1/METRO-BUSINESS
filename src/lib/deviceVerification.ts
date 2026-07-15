// src/lib/deviceVerification.ts

/** Cookie set once a user completes the "check your email on this device" step. */
export const DEVICE_VERIFIED_COOKIE = 'metro-device-verified'

export function isDeviceVerified(): boolean {
  if (typeof document === 'undefined') return false
  return document.cookie.split('; ').some((c) => c === `${DEVICE_VERIFIED_COOKIE}=true`)
}
