import { circleArea, startsWithAZChar } from "./lib";
import { describe, it } from "@jest/globals";

describe("circleArea", () => {
  it("should calculate circle area for positive radius", () => {
    expect(circleArea(5)).toBeCloseTo(78.539, 2)
  })

  it("should calculate circle area for negative radius", () => {
    expect(circleArea(-5)).toBeCloseTo(78.539, 2)
  })
  
  it("should return 0 for incorrect radius values", () => {
    expect(circleArea(null)).toBe(0)
    expect(circleArea(undefined)).toBe(0)
    expect(circleArea("radius")).toBe(0)
  })
})

describe("startsWithAZChar", () => {
  it("should return true for string with first letter in A-Z range", () => {
    expect(startsWithAZChar("Aligned")).toBeTruthy()
    expect(startsWithAZChar("Zool")).toBeTruthy()
    expect(startsWithAZChar("Bool")).toBeTruthy()
  })

  it("should return false for string with first letter outside A-Z range", () => {
    expect(startsWithAZChar("aligned")).toBeFalsy()
    expect(startsWithAZChar("zool")).toBeFalsy()
    expect(startsWithAZChar("Żool")).toBeFalsy()
  })

  it("should return false for empty string", () => {
    expect(startsWithAZChar("")).toBeFalsy()
    expect(startsWithAZChar(" ")).toBeFalsy()
  })

  it("should return false for not a string values", () => {
    expect(startsWithAZChar(11)).toBeFalsy()
    expect(startsWithAZChar(null)).toBeFalsy()
    expect(startsWithAZChar(undefined)).toBeFalsy()
  })
})