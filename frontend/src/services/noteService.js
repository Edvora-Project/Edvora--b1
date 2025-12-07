import { databases, DATABASE_ID, NOTES_COLLECTION_ID, ID, Query } from "../config/appwrite";

export const listNotes = async () => {
  const response = await databases.listDocuments(
    DATABASE_ID,
    NOTES_COLLECTION_ID,
    [Query.orderDesc("uploadDate")]
  );
  return response.documents;
};

export const createNote = async (noteData) => {
  const document = await databases.createDocument(
    DATABASE_ID,
    NOTES_COLLECTION_ID,
    ID.unique(),
    noteData
  );
  return document;
};
