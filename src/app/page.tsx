
import styles from './styles/Home.module.scss';
import Header from '@/components/Header';
import CardTaskList from '@/components/CardTaskList';

export default function Home() {
  return (
    <div className={`${styles.container} bg-slate-200 h-screen w-full mx-0`}>
      <Header/>
      <main className={`${styles.main}`}>
        <CardTaskList />
      </main>
      
    </div>
  );
}
