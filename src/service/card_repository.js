import { firebaseDatabase } from './firebase';

class CardRepository {
    //id별로 data가 저장 되도록 해줘야한다
    //id별로 카드 저장

    syncCards(userId, onUpdate) {
        const ref = firebaseDatabase.ref(`${userId}/cards`);
        ref.on('value', (snapshot) => {
            const data = snapshot.val();
            data && onUpdate(data);
            //onUpdate는 콜백함수
        });
    }
    //saveCard와 removeCard에서는 추가하고 지우는것은 가능하나
    //data가 유지되지는 않는다 syncCards를 통해서 값 저장하기
    saveCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).set(card);
    }
    removeCard(userId, card) {
        firebaseDatabase.ref(`${userId}/cards/${card.id}`).remove();
    }
}
export default CardRepository;
