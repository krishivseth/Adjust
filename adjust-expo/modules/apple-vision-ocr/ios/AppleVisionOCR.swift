// AppleVisionOCRModule.swift
import ExpoModulesCore
import Vision
import UIKit

public class AppleVisionOCRModule: Module {
  
  public func definition() -> ModuleDefinition {
    Name("AppleVisionOCR")
    
    // Define a function "recognizeText" that accepts an image path and returns a promise with an array of strings.
    Function("recognizeText") { (imagePath: String) -> Promise<[String]> in
      return Promise { resolve, reject in
        guard let uiImage = UIImage(contentsOfFile: imagePath) else {
          reject("image_error", "Could not load image from path", nil)
          return
        }
        guard let cgImage = uiImage.cgImage else {
          reject("image_error", "Could not convert UIImage to CGImage", nil)
          return
        }
        
        let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
        let request = VNRecognizeTextRequest { (request, error) in
          if let error = error {
            reject("ocr_error", error.localizedDescription, error)
            return
          }
          
          var recognizedStrings: [String] = []
          if let observations = request.results as? [VNRecognizedTextObservation] {
            for observation in observations {
              if let candidate = observation.topCandidates(1).first {
                recognizedStrings.append(candidate.string)
              }
            }
          }
          resolve(recognizedStrings)
        }
        
        request.recognitionLevel = .accurate
        request.usesLanguageCorrection = true
        
        do {
          try requestHandler.perform([request])
        } catch {
          reject("ocr_error", "Failed to perform OCR request", error)
        }
      }
    }
  }
}