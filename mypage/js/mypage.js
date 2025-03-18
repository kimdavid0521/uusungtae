document.addEventListener('DOMContentLoaded', function () {
  const editButton = document.querySelector('.edit-btn');
  const details = document.querySelector('.details');

  editButton.addEventListener('click', function () {
    // 기존 정보 가져오기
    const nameText = document.getElementById('name-text').textContent.trim();
    const emailText = document.getElementById('email-text').textContent.trim();
    const phoneText = document.getElementById('phone-text').textContent.trim();

    // input 태그로 변경
    details.innerHTML = `
            <p><strong>이름:</strong> <input type="text" id="name" value="${nameText}"></p>
            <p><strong>이메일:</strong> <input type="email" id="email" value="${emailText}"></p>
            <p><strong>연락처:</strong> <input type="text" id="phone" value="${phoneText}"></p>
            <button class="save-btn">저장</button>
        `;

    // 저장 버튼 이벤트 리스너 추가
    document.querySelector('.save-btn').addEventListener('click', function () {
      const newName = document.getElementById('name').value;
      const newEmail = document.getElementById('email').value;
      const newPhone = document.getElementById('phone').value;

      // 다시 텍스트 형식으로 변경
      details.innerHTML = `
                <p><strong>이름:</strong> <span id="name-text">${newName}</span></p>
                <p><strong>이메일:</strong> <span id="email-text">${newEmail}</span></p>
                <p><strong>연락처:</strong> <span id="phone-text">${newPhone}</span></p>
            `;

      // 버튼 원래대로 복구
      details.insertAdjacentHTML(
        'afterend',
        '<button class="edit-btn">정보 수정</button>'
      );

      // 새로 추가된 버튼에 이벤트 리스너 다시 부착
      document
        .querySelector('.edit-btn')
        .addEventListener('click', arguments.callee);
    });
  });
});
