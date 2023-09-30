import { 
    createUserWithEmailAndPassword,
    onAuthStateChanged, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile
} from "firebase/auth";
import { 
    createContext, 
    useContext, 
    useEffect, 
    useState 
} from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { ModalLy } from "../components/index";
import { Login, Register } from "../pages/index";
import { collection, onSnapshot, query, where } from "firebase/firestore";


const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState('login');
    const [favorites, setFavorites] = useState([]);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
          if (authUser) {
            setUser(authUser);
          } else {
            setUser(null);
          }
          setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
      if(user) {
        const documents = query(collection(db, 'favorites'), where ("userId", "==", user.uid))
        
        const unsubscribe = onSnapshot(documents, (querySnapshot) => {
            const wishList = [];
            querySnapshot.forEach((doc) => {
                wishList.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setFavorites(wishList);
        });
        return () => unsubscribe();
      }
    }, [user])
    

    const registerUser = async({email, password, firstName, lastName}) => {

      try {
          const userCredential = await createUserWithEmailAndPassword(auth, email, password);
          await updateProfile(auth.currentUser, {displayName:`${firstName} ${lastName}`})
          const {user} = userCredential;
          closeModal();
          window.location.href = "/";
          
      } catch (error) {
          console.log(error);
      }
  }
  
  const signIn = async ({email, password}) => {
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          const { user } = userCredential;
          window.location.href = "/";
      } catch(error){
          const { code, message } = error;
          console.log(code, message);
      };
  }
  
  const signOff = async() => {  
      try {
          await signOut (auth);
          window.location.href = "/";
      } catch (error) {
          console.log(error);
      }
  }
  
    return (
        <AuthContext.Provider value={{
            user,
            registerUser,
            signIn,
            signOff,
            closeModal,
            openModal,
            setForm,
            favorites
        }}>
            { !isLoading && children }

            <ModalLy 
                handleClose={closeModal} 
                show={isOpen}
                form = {form}
            >
                { 
                    form == 'login'
                        ? <Login/>
                        : <Register/>
                }
            </ModalLy>
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}