import { Client, Account, Databases, Storage, ID, Query } from 'appwrite';

const client = new Client();

client
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || 'your-project-id');

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);

// Database and Collection IDs
export const DATABASE_ID = 'edvora_database';
export const MENTORS_COLLECTION_ID = 'mentors';
export const PROJECTS_COLLECTION_ID = 'projects';
export const MENTOR_RELATIONS_COLLECTION_ID = 'mentor_relations';
export const NOTES_COLLECTION_ID = 'notes';
export const NOTES_BUCKET_ID = 'notes_bucket';

export { ID, Query };
export default client;