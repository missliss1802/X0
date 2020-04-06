window.onload = () => {
    let col = document.getElementsByClassName('col');
    let end = document.getElementsByClassName('end');
    let countX = document.getElementsByClassName('countX');
    let count0 = document.getElementsByClassName('count0');
    let butX = document.getElementById('butX');
    let but0 = document.getElementById('but0');
    let wrap = document.getElementsByClassName('wrap');
    let play = '';
    let cX = 0;
    let c0 = 0;
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let res = ['0', '0', '0', '0', '0', '0', '0', '0', '0']
    butX.addEventListener('click', (e) => {
        play = 'X';
        document.getElementsByClassName('but')[0].innerHTML = '';
        wrap[0].style.display = 'block'
    })
    but0.addEventListener('click', (e) => {
        play = '0';
        document.getElementsByClassName('but')[0].innerHTML = '';
        wrap[0].style.display = 'block'
    })
    for (let i = 0; i < col.length; i++) {
        let func = () => {
            arr = arr.filter( el => el != i);
            play == 'X' ? col[i].innerHTML = 'X' : col[i].innerHTML = '0'
            col[i].innerHTML == 'X' ? res[i] = 1 : res[i] = 0;
            let index = Math.floor(Math.random() * arr.length);
            if (!col[arr[index]]) {
                end[0].insertAdjacentHTML('afterBegin', '<div class="win"><h3>no Win<h3> <button id="restart">Restart</button></div>');
                end[0].style.opacity = '1';
                end[0].style.zIndex = '2';
                let restart = document.getElementById('restart');
                restart.addEventListener('click', (e) => {
                    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    res = ['0', '0', '0', '0', '0', '0', '0', '0', '0']
                    end[0].style.opacity = '0';
                    end[0].style.zIndex = '-1';
                    end[0].innerHTML = '';
                    for (let j = 0; j < col.length; j++) {
                        col[j].innerHTML = '';
                    }
                })
            }
            col[i].innerHTML == 'X' ? col[arr[index]].innerHTML = '0': col[arr[index]].innerHTML = 'X'
            col[arr[index]].innerHTML == 'X' ? res[arr[index]] = 1 : res[arr[index]] = 0;
            arr = arr.filter( el => el != arr[index]);
            if ((res[1] == 1 && res[2] == 1 && res[0] == 1)
                 || (res[0] == 1 && res[4] == 1 && res[8] == 1) 
                 || (res[0] == 1 && res[3] == 1 && res[6] == 1)
                 || (res[3] == 1 && res[4] == 1 && res[5] == 1)
                 || (res[6] == 1 && res[7] == 1 && res[8] == 1)
                 || (res[2] == 1 && res[4] == 1 && res[6] == 1)
                 || (res[1] == 1 && res[4] == 1 && res[7] == 1)
                 || (res[2] == 1 && res[5] == 1 && res[8] == 1)) {
                cX++;
                countX[0].innerHTML = cX;
                end[0].insertAdjacentHTML('afterBegin', '<div class="win"><h3>Win "X"<h3> <button id="restart">Restart</button></div>');
                end[0].style.opacity = '1';
                end[0].style.zIndex = '2';
                let restart = document.getElementById('restart');
                restart.addEventListener('click', (e) => {
                    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    res = ['0', '0', '0', '0', '0', '0', '0', '0', '0']
                    end[0].style.opacity = '0';
                    end[0].style.zIndex = '-1';
                    end[0].innerHTML = '';
                    for (let j = 0; j < col.length; j++) {
                        col[j].innerHTML = '';
                    }
                })
            } else if ((res[1] === 0 && res[2] === 0 && res[0] === 0)
                    || (res[0] === 0 && res[4] === 0 && res[8] === 0) 
                    || (res[0] === 0 && res[3] === 0 && res[6] === 0)
                    || (res[3] === 0 && res[4] === 0 && res[5] === 0)
                    || (res[6] === 0 && res[7] === 0 && res[8] === 0)
                    || (res[2] === 0 && res[4] === 0 && res[6] === 0)
                    || (res[1] === 0 && res[4] === 0 && res[7] === 0)
                    || (res[2] === 0 && res[5] === 0 && res[8] === 0)) {
                c0++;
                count0[0].innerHTML = c0;
                end[0].insertAdjacentHTML('afterBegin', '<div class="win"><h3>Win "0"<h3> <button id="restart">Restart</button></div>');
                end[0].style.opacity = '1';
                end[0].style.zIndex = '2';
                let restart = document.getElementById('restart');
                restart.addEventListener('click', (e) => {
                    arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                    res = ['0', '0', '0', '0', '0', '0', '0', '0', '0']
                    end[0].innerHTML = '';
                    end[0].style.opacity = '0';
                    end[0].style.zIndex = '-1';
                    for (let j = 0; j < col.length; j++) {
                        col[j].innerHTML = '';
                    }
                })
            }
        }
        col[i].addEventListener('click', func)
    }

}