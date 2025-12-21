import styles from "../Notes.module.css";
import PocketBase from "pocketbase";

async function getNote(noteId: string) {
    const db = new PocketBase("http://127.0.0.1:8090");
    const data = await db.collection("notes").getOne(noteId);
    return data;
}

export default async function NotePage({ params }: any) {
    params = await params;
    const note = await getNote(params.id);

    return (
        <div>
            <h1>notes/{note.id}</h1>
            <div className={styles.note}>
                <h3>{note.title}</h3>
                <h5>{note.content}</h5>
                <p>{note.created}</p>
            </div>
        </div>
    );
}
