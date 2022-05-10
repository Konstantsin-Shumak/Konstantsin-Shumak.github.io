const createKeyboard = () => {
    document.body.innerHTML = `
    <div class="container">
    <h2 class="title"> Виртуальная клавиатура </h2>
    <textarea id="input-text" class="text"></textarea>
    <div class="keyboard_wrapp">
        <div class="keyboard_keys">
            <div class="row">
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys backspace_key"></div>
            </div>
            <div class="row">
                <div class="keys tab_key"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys slash_key"></div>
            </div>
            <div class="row">
                <div class="keys caps_lock_ley"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys enter_key"></div>
            </div>
            <div class="row">
                <div class="keys shift_key shift_left"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys"></div>
                <div class="keys shift_key shift_right"></div>
            </div>
            <div class="row">
                <div class="keys ctrl_key ctrl_left"></div>
                <div class="keys win_key"></div>
                <div class="keys alt_key alt_left"></div>
                <div class="keys space_key"></div>
                <div class="keys alt_key alt_right"></div>
                <div class="keys fn_key"></div>
                <div class="keys ctrl_key ctrl_right"></div>
            </div>
        </div>
    </div>
    <h5 class="title bottom"> Для переключения языка нажмите комбинацию Ctrl+Alt </h5>
</div>
    `;
};
createKeyboard();
