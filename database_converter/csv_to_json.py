# This script converts a csv file to a json file

# Importing the required modules
import pandas as pd
import json

# Defining the URL's
url = './Files/Basedata/Kontinente.csv'
output_url = './Files/Used_Data/json/Kontinente.json'

def csv_to_json(url):

    # Reading the CSV File
    df = pd.read_csv(url)
    print(df.head())

    # Creating a JSON File
    js = df.to_json(output_url, orient='records', indent= 1)

    print(f"JSON file has been created at {output_url}")

# Calling the function
csv_to_json(url)