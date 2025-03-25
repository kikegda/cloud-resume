import os
from dotenv import load_dotenv
from google.cloud import firestore

load_dotenv()

cloud_resume_project = os.getenv('CLOUD_RESUME_PROJECT_ID')

db = firestore.Client(project=cloud_resume_project)



def add_visit():
    doc_ref = db.collection("visits").document("visit_count")
    doc_ref.set({"count": firestore.Increment(1)}, merge=True)

def get_visits():
    doc_ref = db.collection("visits").document("visit_count")
    doc = doc_ref.get()
    return doc.to_dict()
        
     