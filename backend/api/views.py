from django.http import JsonResponse
from rest_framework.decorators import api_view
import pandas as pd
import joblib
import os
from django.conf import settings

# Dynamically construct the path to the models
KAPHA_MODEL_PATH = os.path.join(settings.BASE_DIR, 'trained_models', 'kapha_model_G.pkl')
PITTA_MODEL_PATH = os.path.join(settings.BASE_DIR, 'trained_models', 'pitta_model_G.pkl')
VATA_MODEL_PATH = os.path.join(settings.BASE_DIR, 'trained_models', 'vata_model_G.pkl')


kapha_model = joblib.load(KAPHA_MODEL_PATH)
pitta_model = joblib.load(PITTA_MODEL_PATH)
vata_model = joblib.load(VATA_MODEL_PATH)

@api_view(['POST'])  # Ensure the view accepts POST requests
def predict_doshas(request):
    try:
        # Extract data for each dosha
        raw_data = request.data
        #print("Raw Data:", raw_data)
        
        kapha_data = raw_data.get('kapha', [])
        pitta_data = raw_data.get('pitta', [])
        vata_data = raw_data.get('vata', [])

        # print("kapha -",kapha_data)
        # print("Pitta - ",pitta_data)
        # print("Vata - ",vata_data)

        # Function to process dosha data and predict using the corresponding model
        def predict_dosha(data, model):
            if not data:
                return None  # No data for this dosha
            # Extract questions and answers
            answers = [item['answer'] for item in data]
            # Create a DataFrame for the model prediction
            input_df = pd.DataFrame([answers], columns=[item['question'] for item in data])
            # Predict and return the result
            return model.predict(input_df)[0]

        # Predict for each dosha
        kapha_prediction = predict_dosha(kapha_data, kapha_model)
        pitta_prediction = predict_dosha(pitta_data, pitta_model)
        vata_prediction = predict_dosha(vata_data, vata_model)

        print('Kapha - ',kapha_prediction)
        print('Pitta - ',pitta_prediction)
        print('Vata - ',vata_prediction)

        return JsonResponse({
            'kapha_prediction': kapha_prediction,
            'pitta_prediction': pitta_prediction,
            'vata_prediction': vata_prediction
        })


    except Exception as e:
        print(f"Error in code: {e}")  # Log the exception to the console
        return JsonResponse({'error': f"An error occurred: {str(e)}"}, status=400)


