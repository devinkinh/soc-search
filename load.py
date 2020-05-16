import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate('private/soc-search-2f1f1d8b4d78.json')
firebase_admin.initialize_app(cred)

db = firestore.client()
tcollection = db.collection('test-collection')
docs = users_ref.stream()
def delete():
    count = 0
    for doc in docs:
        tcollection.document(doc.id).delete()
        count +=1
    print("deleted " + str(count) + " documentes")

def loadCsv():
    # read csv
    ufh = open('Universities.csv')
    header = None;
    count = 0
    for x in ufh:
        row = x.split(',')
        if header == None:
            header = row
        else:
            dicts = {}
            for i, key in enumerate(header):
                dicts[key.strip()] = row[i]
            tcollection.document(dicts['UNITID']).set(dicts)
            count += 1
    print("added " + str(count) + " documents")
loadCsv()
# delete()
