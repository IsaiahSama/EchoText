﻿# Echo Notes

 Note: This project was rebuilt using Flutter and can be accessed here: [Vn2Text](https://github.com/IsaiahSama/Vn2Text)

## Overview
This is a mobile applications developed using Expo + React Native, designed to accept a whatsapp voice note and transcribe it into text.

## How it works
Will make use of the Share Intent to receive WhatsApp voice notes, and communicate with a speech to text API designed in FastAPI.

User will select a voice note, press "share" and share it with the application. The application will then send the audio via an audio stream to a FastAPI server for transcription.
Once the transcription is completed, the text will be returned to the application, where it will be displayed as a closeable pop up overlay window on the user's screen!

## Pages
- Recent Transcriptions
- Edit Transcription

### Recent Transcriptions
Shows a list of recent transcriptions.
Tapping a transcription will copy it to the clipboard.
Each transcription contains the following data:
- Transcribed Text (ellipsed if overflow)
- Menu button to view full transcription
- Menu button to edit the transcription.
- Menu button to delete the transcription.

### Edit / View Transcription Page
Allows you to view and edit a transcription as you see fit.
Will also let you copy it the the clipboard.


# Notice:
Project Abandoned. Working with Android Studio and USB Debugging is proving to be impossible since it refuses to work or connect, or even complain about java despite it being clearly set up and installed.

