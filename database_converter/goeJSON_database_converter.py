# Description: This script is used to Create a geoJSON database from the CSV Files in Used_Data folder.

# Importing the required modules
import pandas as pd
import json

# Defining the URL's
url_Countries = './Files/Used_Data/csv/Countries_R_Lat_long.csv'
url_Dumplings = './Files/Used_Data/csv/Dumplings.csv'
url_geojson =   './Files/Used_Data/geoJSON/Dumplingpoints.geojson'

def csv_to_geojson(url_Countries, url_Dumplings, url_geojson):
    # Reading the CSV Files
    df_Countries = pd.read_csv(url_Countries)
    df_Dumplings = pd.read_csv(url_Dumplings, sep="\t")

    #print(df_Countries.head())
    #print(df_Dumplings.head())

    # Creating a geoJSON File

    #definiton of the geoJSON
    geoJSON = {"type": "FeatureCollection", "features": []}

    #getting the data from the CSV´s
    for x in df_Countries['Index']:

        #getting the data from the CSV´s
        country = df_Countries.loc[df_Countries['Index'] == x, 'Country'].values[0]
        Region = df_Countries.loc[df_Countries['Index'] == x, 'Region'].values[0]
        lat = df_Countries.loc[df_Countries['Index'] == x, 'LAT'].values[0]
        long = df_Countries.loc[df_Countries['Index'] == x, 'LONG'].values[0]
        dumpling = df_Dumplings.loc[df_Dumplings['Landesindex'] == x, 'Name_Teigtasche'].values[0]
        Name_Landesprache = df_Dumplings.loc[df_Dumplings['Landesindex'] == x, 'Name_Landesprache'].values[0]
        Zubereitungsart = df_Dumplings.loc[df_Dumplings['Landesindex'] == x, 'Zubereitungsart'].values[0]
        Info = df_Dumplings.loc[df_Dumplings['Landesindex'] == x, 'Info'].values[0]


        #creation of the geoJSON
        feature = {"type": "Feature",
                   "properties": {
                       "Country": country,
                       "Region": Region,
                       "Dumpling": dumpling,
                       "Info": Info,
                       "popupContent": str(dumpling) +" ist eine Teigtasche aus " + str(country) + "in der Sprach des Landes wird die Teigtasche " + str(Name_Landesprache) + "genannt. \n" + "Die Teigtasche wird " + str(Zubereitungsart) + "."
                       },
                   "geometry": {"type": "Point", "coordinates": [long, lat]}}

        #appending the geoJSON
        geoJSON["features"].append(feature)

        #print(geoJSON)

    #writing the geoJSON to file
    with open(url_geojson, 'w') as f:
        json.dump(geoJSON, f)
  
csv_to_geojson(url_Countries, url_Dumplings, url_geojson)