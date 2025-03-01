// OCRFlightScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // <-- Using Expo ImagePicker
import AppleVisionOCR from '../../modules/apple-vision-ocr/src/AppleVisionOCR';

// Helper function to extract departure and arrival times from recognized text
function extractDepartureAndArrivalTimes(
  ocrText: string
): { departureTime: string | null; arrivalTime: string | null } {
  const lines = ocrText.split('\n');
  let departureTime: string | null = null;
  let arrivalTime: string | null = null;

  // Regex pattern for time strings (e.g. "08:45" or "8:45 AM")
  const timeRegex = /(\d{1,2}:\d{2}(?:\s?(?:AM|PM))?)/gi;

  lines.forEach((line: string) => {
    const lowerLine = line.toLowerCase();
    if (lowerLine.includes('dep') || lowerLine.includes('departure')) {
      const match = line.match(timeRegex);
      if (match && match.length > 0) {
        departureTime = match[0];
      }
    }
    if (lowerLine.includes('arr') || lowerLine.includes('arrival')) {
      const match = line.match(timeRegex);
      if (match && match.length > 0) {
        arrivalTime = match[0];
      }
    }
  });

  // Fallback: if keywords not found, use the first two time matches
  if (!departureTime || !arrivalTime) {
    const allMatches = ocrText.match(timeRegex);
    if (allMatches && allMatches.length >= 2) {
      departureTime = departureTime || allMatches[0];
      arrivalTime = arrivalTime || allMatches[1];
    }
  }

  return { departureTime, arrivalTime };
}

const OCRFlightScreen: React.FC = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [ocrText, setOcrText] = useState<string>('');
  const [departure, setDeparture] = useState<string | null>(null);
  const [arrival, setArrival] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Request camera permission and launch camera
  const handleTakePhoto = async () => {
    const cameraPerm = await ImagePicker.requestCameraPermissionsAsync();
    if (!cameraPerm.granted) {
      alert('Camera permission is required to take a photo.');
      return;
    }

    try {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
        base64: false,
      });

      if (!result.canceled) {
        // result.assets is an array of selected images; use the first one
        const uri = result.assets?.[0].uri;
        if (uri) {
          setImageUri(uri);
          await processImage(uri);
        }
      }
    } catch (error) {
      console.error('Camera error:', error);
    }
  };

  // Request media library permission and launch image library
  const handlePickImage = async () => {
    const mediaPerm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!mediaPerm.granted) {
      alert('Media library permission is required to pick an image.');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.8,
        base64: false,
      });

      if (!result.canceled) {
        const uri = result.assets?.[0].uri;
        if (uri) {
          setImageUri(uri);
          await processImage(uri);
        }
      }
    } catch (error) {
      console.error('Image picker error:', error);
    }
  };

  // Process the image using Apple Vision OCR native module and extract times
  const processImage = async (uri: string) => {
    try {
      setLoading(true);
      // Call the native AppleVisionOCR module
      const recognizedLines: string[] = await AppleVisionOCR.recognizeText(uri);
      const textCombined = recognizedLines.join('\n');
      setOcrText(textCombined);
      const { departureTime, arrivalTime } = extractDepartureAndArrivalTimes(
        textCombined
      );
      setDeparture(departureTime);
      setArrival(arrivalTime);
    } catch (error) {
      console.error('Error during OCR processing:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Flight Ticket OCR (Apple Vision)</Text>
      <View style={styles.buttonContainer}>
        <Button title="Take Photo" onPress={handleTakePhoto} />
        <Button title="Pick Image" onPress={handlePickImage} />
      </View>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      {ocrText ? (
        <View style={styles.textContainer}>
          <Text style={styles.subtitle}>Recognized Text:</Text>
          <Text style={styles.ocrText}>{ocrText}</Text>
        </View>
      ) : (
        <Text style={styles.infoText}>OCR result will appear here.</Text>
      )}
      {(departure || arrival) && (
        <View style={styles.resultsContainer}>
          <Text style={styles.subtitle}>Extracted Flight Times:</Text>
          <Text style={styles.resultText}>
            Departure: {departure || 'Not found'}
          </Text>
          <Text style={styles.resultText}>
            Arrival: {arrival || 'Not found'}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginVertical: 15,
  },
  textContainer: {
    marginVertical: 10,
    width: '100%',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  ocrText: {
    fontSize: 14,
    color: '#333',
  },
  resultsContainer: {
    marginVertical: 15,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 3,
  },
  infoText: {
    fontSize: 16,
    color: 'gray',
    marginVertical: 15,
  },
});

export default OCRFlightScreen;