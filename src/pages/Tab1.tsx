import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { observer } from 'mobx-react-lite';
import { Todo, Loading, Error } from '../components';
import { useQuery } from '../models';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <TodoList/>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

export const TodoList = observer(() => {
//@ts-ignore
  const { loading, error, data, query } = useQuery(store => store.queryTodos())
  if (error) return <Error>{error.message}</Error>
  if (data)
    return (
      <>
        <ul>
          {
            //@ts-ignore
          data.todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
        {loading ? (
          <Loading />
        ) : (
          <button onClick={query!.refetch}>Refetch</button>
        )}
      </>
    )
  return <Loading />
})
