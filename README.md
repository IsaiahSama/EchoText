# Echo Notes

## Overview
This is a mobile applications developed using Expo + React Native, designed to accept a whatsapp voice note and transcribe it into text.

## How it works
Will make use of the Share Intent to receive WhatsApp voice notes, and communicate with a speech to text API designed in FastAPI.

User will select a voice note, press "share" and share it with the application. The application will then send the audio via an audio stream to a FastAPI server for transcription.
Once the transcription is completed, the text will be returned to the application, where it will be displayed as a closeable pop up overlay window on the user's screen!