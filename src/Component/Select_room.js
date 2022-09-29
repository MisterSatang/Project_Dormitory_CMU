import axios from "axios";
export default function Select_room({ dormitories, setCardRoom, sexBuilding }) {
  const cardRooms = dormitories.map((room) => room.rooms).flat();
  console.log(cardRooms);

  function addReversedRoom(roomID, floor, roomNo, numMax, numStudent) {
    if (window.confirm(`คุณต้องการจองห้อง : ${roomNo} ใช่ไหม`) == true) {
      axios
        .put(`http://localhost:8000/rooms/${sexBuilding}/${roomID}`, {
          floor: floor,
          roomNo: roomNo,
          numMax: numMax,
          numStudent: numStudent + 1,
        })
        .then(() => {
          setCardRoom(dormitories);
        });
    } else {
      console.log("no");
    }
  }

  return (
    <>
      {cardRooms.map((cardRoom) => (
        <div
          key={cardRoom.id}
          class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 "
        >
          <button
            class={
              cardRoom.numStudent === cardRoom.numMax
                ? "room shadow bg-dark-100 text-dark"
                : "room shadow card-room bg-purple"
            }
            onClick={() =>
              addReversedRoom(
                cardRoom.id,
                cardRoom.floor,
                cardRoom.roomNo,
                cardRoom.numMax,
                cardRoom.numStudent
              )
            }
            disabled={cardRoom.numStudent === cardRoom.numMax ? true : false}
          >
            <div class="container-fluid">
              <div class="row">
                <div class="col"></div>
                <div class="col-8 d-flex bg-white rounded-room fs-5 count-room p-0 justify-content-center">
                  <div
                    class={
                      cardRoom.numStudent === cardRoom.numMax
                        ? "d-flex align-items-center text-dark-100"
                        : "d-flex align-items-center text-purple"
                    }
                  >
                    {cardRoom.numStudent === cardRoom.numMax
                      ? "เต็ม"
                      : `${cardRoom.numStudent}/${cardRoom.numMax}`}
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="d-flex text-white fs-3 ">{cardRoom.roomNo}</div>
              </div>
              <div class="d-flex justify-content-center">
                <div class="d-flex text-white fs-6">ห้องเลข</div>
              </div>
            </div>
          </button>
        </div>
      ))}
    </>
  );
}
