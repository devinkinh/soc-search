import firebase_admin
import requests
import json
from firebase_admin import credentials
from firebase_admin import firestore
from elasticsearch import Elasticsearch
import csv


es = Elasticsearch(
    ['https://e6a48c02bc484bae968fe2cb32297a93.us-central1.gcp.cloud.es.io:9243'],
    http_auth=('fakename', 'fakepassword'),
    scheme="https",
    port=443,
)


cred = credentials.Certificate('private/soc-search-2f1f1d8b4d78.json')
firebase_admin.initialize_app(cred)

db = firestore.client()
tcollection = db.collection('test-collection')
docs = tcollection.stream()

def delete():
    count = 0
    for doc in docs:
        tcollection.document(doc.id).delete()
        count +=1
    print("deleted " + str(count) + " documentes")

def loadCsv():
    # read csv
    ufh = open(r'private\Universities.csv');

    header = None;
    count = 0
    for row in csv.reader(ufh, doublequote=True, quoting=csv.QUOTE_ALL, escapechar='\\'):
        if header == None:
            header = row
        else:
            dicts = {}
            for i, key in enumerate(header):
                dicts[key.strip()] = row[i]
            tcollection.document(dicts['UNITID']).set(dicts)
            count += 1
       
    print("added " + str(count) + " documents")

def elasticLoad():
    uni_docs = [snapshot for snapshot in docs]
    count = 0
    for doc in uni_docs:
        newDoc = doc.to_dict()
        res = es.update(index="soc-index",doc_type='_doc', id=newDoc['UNITID'], body={'doc':newDoc})

    es.indices.refresh(index="soc-index")
    print("done updating all firebased index documents")



# elasticLoad()
# loadCsv()
# delete()
