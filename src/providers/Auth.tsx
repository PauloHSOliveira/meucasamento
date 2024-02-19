import { auth } from '@/config/firebase';
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Definir o tipo para o usuário
interface User {
  email: string | null;
  uid: string | null;
}

// Criar o contexto de autenticação
interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Função para autenticar o usuário
  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  // Função para sair
  const signOut = async () => {
    try {
      await auth.signOut();
    } catch (error: any) {
      console.error(error.message);
    }
  };

  // Efeito para observar mudanças de autenticação
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuthenticated(true);
        setCurrentUser(user);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signIn, signOut, isAuthenticated }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Hook para acessar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};

export default AuthContext;
