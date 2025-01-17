import { useRef } from "react"
import { authorization, dbase, storage } from "../../Firebase"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import { addDoc, collection } from "firebase/firestore/lite"

const Home = () => {
    const form = useRef();

    const submitPortfolio = (e) => {
        e.preventDefault();

        const name = form.current[0]?.value;
        const description = form.current[1]?.value;
        const url = form.current[2]?.value;
        const image = form.current[3]?.files[0];

        const storageReference = ref(storage, `portfolio/${image.name}`);

        uploadBytes(storageReference, image).then(
            (snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadUrl) => {
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: downloadUrl
                    })
                }, (error) => {  // Error Handler same portfolio with null img
                    console.log(error)
                    savePortfolio({
                        name,
                        description,
                        url,
                        image: null
                    })
                })
            }, (error) => {  // Error Handler same portfolio with null img
                console.log(error)
                savePortfolio({
                    name,
                    description,
                    url,
                    image: null
                })
            }
        )
    }

    const savePortfolio = async (portfolio) => {
        try {
            await addDoc(collection(dbase, 'portfolio'), portfolio);
            window.location.reload(false)
        } catch (error) {
            alert('Failed to add portfolio')
        }
    }

    return (
        <div className="dashboard">
            <form ref={form} onSubmit={submitPortfolio}>
                <p><input type="text" placeholder="name" /></p>
                <p><textarea placeholder="Description" /></p>
                <p><input type="text" placeholder="Url" /></p>
                <p><input type="file" placeholder="Image" /></p>
                <button type="submit">Submit</button>
                <button onClick={() => authorization.signOut()}>Sign out</button>
            </form>
        </div>
    )
}

export default Home