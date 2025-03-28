"""
Description: This script is used to create a geoJSON database from the CSV files in the Used_Data folder.

Input:
1. Countries_R_Lat_long.csv:
   - Columns:
     - Index: Unique identifier for each country.
     - Country: Name of the country.
     - Region: Region of the country.
     - LAT: Latitude of the country's location.
     - LONG: Longitude of the country's location.

2. Dumplings.csv:
   - Columns:
     - Landesindex: Matches the Index column in Countries_R_Lat_long.csv.
     - Name_Teigtasche: Name of the dumpling.
     - Name_Landesprache: Name of the dumpling in the local language.
     - Zubereitungsart: Preparation method of the dumpling.
     - Info: Additional information about the dumpling.

Output:
- Dumplingpoints.geojson:
  - A geoJSON file containing features with properties such as Country, Region, Dumpling, Info, and popupContent.
  - Each feature includes a geometry object with type "Point" and coordinates [longitude, latitude].
"""

# Importing the required modules
import pandas as pd
import json

# Defining the URL's
url_Countries = 'Database/Map_Data/csv/Countries_R_Lat_long.csv'
url_Dumplings = 'Database/Map_Data/csv/Teigtaschen_der_Welt.csv'
url_geojson =   'Database/Map_Data/geoJSON/Dumplingpoints.geojson'

def csv_to_geojson(url_Countries, url_Dumplings, url_geojson):
    # Reading the CSV Files
    df_Countries = pd.read_csv(url_Countries)
    df_Dumplings = pd.read_csv(url_Dumplings, sep=",")

    # Creating a geoJSON File
    geoJSON = {"type": "FeatureCollection", "features": []}

    # Iterating through the rows of df_Dumplings
    for index, row in df_Dumplings.iterrows():
        if row['Name_Teigtasche'] != 'na':
            # Matching the country data using Landesindex
            matching_country = df_Countries[df_Countries['Index'] == row['Landesindex']]
            if not matching_country.empty:
                country = matching_country.iloc[0]['Country']
                region = matching_country.iloc[0]['Region']
                lat = matching_country.iloc[0]['LAT']
                long = matching_country.iloc[0]['LONG']

                dumpling = row['Name_Teigtasche']
                name_landesprache = row['Name_Landesprache']
                zubereitungsart = row['Zubereitungsart']
                info = row['Info']

                # Creation of the geoJSON feature
                feature = {
                    "type": "Feature",
                    "properties": {
                        "Country": country,
                        "Region": region,
                        "Dumpling": dumpling,
                        "Info": info,
                        "popupContent": f"{dumpling} ist eine Teigtasche aus {country}. In der Sprache des Landes wird die Teigtasche {name_landesprache} genannt.\nDie Teigtasche wird {zubereitungsart}."
                    },
                    "geometry": {"type": "Point", "coordinates": [long, lat]}
                }

                # Appending the geoJSON feature
                geoJSON["features"].append(feature)

    # Writing the geoJSON to file
    with open(url_geojson, 'w') as f:
        json.dump(geoJSON, f, indent=1)
  
csv_to_geojson(url_Countries, url_Dumplings, url_geojson)