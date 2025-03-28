# This script converts a csv file to a json file

# Importing the required modules
import pandas as pd
import json

# Defining the URL's
url = './Files/Used_Data/csv/Dumplings.csv'
url2 = 'Database/Map_Data/csv/Countries_R_Lat_long.csv'
output_url = 'Database/countries.json'

#variable to choose multi csv conversion
multi = False

# Defining the function

def csv_to_json(url):
 
    # Reading the CSV File
    df = pd.read_csv(url2)
    print(df.head())

    # Creating a JSON File
    js = df.to_json(output_url, orient='records', indent= 1)

    print(f"JSON file has been created at {output_url}")

# Calling the function
csv_to_json(url)