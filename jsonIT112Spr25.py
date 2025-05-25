#import json library
import json

#create the json dictionary

data = {

    'name': 'LaMonte Golden',
    'age': '54',
    'city': 'Seattle,WA',
    'interest': ['music', 'cooking', 'walks'],
    'is_student': True


}

# Write the json dictionary to a file
with open('dataIT112Spr25.json', 'w') as json_file:
    json.dump(data, json_file, indent=4)

print("You have successfully written to dataIT112Spr25.json")