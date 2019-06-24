var searchData = [
    {
        "id": "123-s2-546",
        "name": "John Jacobs",
        "items": [
            "bucket",
            "bottle"
        ],
        "address": "1st Cross, 9th Main, abc Apartment",
        "pincode": "5xx012"
    },
    {
        "id": "123-s3-146",
        "name": "David Mire",
        "items": [
            "Bedroom Set"
        ],
        "address": "2nd Cross, BTI Apartment",
        "pincode": "4xx012"
    },
    {
        "id": "223-a1-234",
        "name": "Soloman Marshall",
        "items": [
            "bottle"
        ],
        "address": "Riverbed Apartment",
        "pincode": "4xx032"
    },
    {
        "id": "121-s2-111",
        "name": "Ricky Beno",
        "items": [
            "Mobile Set"
        ],
        "address": "Sunshine City",
        "pincode": "5xx072"
    },
    {
        "id": "123-p2-246",
        "name": "Sikander Singh",
        "items": [
            "Air Conditioner"
        ],
        "address": "Riverbed Apartment",
        "pincode": "4xx032"
    },
    {
        "id": "b23-s2-321",
        "name": "Ross Wheeler",
        "items": [
            "Mobile"
        ],
        "address": "1st Cross, 9th Main, abc Apartement",
        "pincode": "5xx012"
    },
    {
        "id": "113-n2-563",
        "name": "Ben Bish",
        "items": [
            "Kitchen Set",
            "Chair"
        ],
        "address": "Sunshine City",
        "pincode": "5xx072"
    },
    {
        "id": "323-s2-112",
        "name": "John Michael",
        "items": [
            "Refrigerator"
        ],
        "address": "1st Cross, 9th Main, abc Apartement",
        "pincode": "5xx012"
    },
    {
        "id": "abc-34-122",
        "name": "Jason Jordan",
        "items": [
            "Mobile"
        ],
        "address": "Riverbed Apartment",
        "pincode": "4xx032"
    }
];

document.getElementById('input_text').addEventListener('input', search);

function search(e) {
    var results = [];

    if (results.length === 0) {
        document.getElementById('search-result').style.display = 'none';
    }

    var input_text = (e.target.value);

    for (let i = 0; i <  searchData.length; i++) {
        for (key in searchData[i]) {
            if (searchData[i][key].indexOf(input_text) != -1) {
                results.push(searchData[i]);
            }
        }
    }

    createList(results);
}

function createList(searchResult) {
    var ul = document.getElementById('search-result');
    ul.style.display = 'block';
    let len = searchResult.length;
    
    if (len === 0) {
        ul.style.height = 20 + 'px';
        ul.innerHTML = "<div>No users found!!</div>";
        return;
    }

    var li = '';

    searchResult.forEach((result, index) => {
        li += '<li id=search-'+ index +' onmouseover=`${onMouseOver(event)}` >'+
            '<p id='+ result.id +'>'+
                result.id + '<br/>' +
                result.name + '<br/>' +
                result.address + '<br/>' +
                String(result.pincode) + '<br/>' +
            +'</p>'
        +'</li>'
    });

    ul.innerHTML = li;

    if (len * 120 < 200) {
        ul.style.height = len * 120 + 'px';
    }
    else {
        ul.style.height = '400px';
    }

    if (len > 0) {
        document.getElementById('input_text').addEventListener('keydown', onKeydownHandler);
        // document.getElementById('search-result').addEventListener('mouseover', onMouseOver);
    }

}


var prev;
var isUp = false;
var isDown = false;
var mouseOver = false;
var selectCountLi = 0;

function onKeydownHandler(e) {

    if (e && e.keyCode === 40) {

        if (prev && isDown) {
            selectCountLi += 2;
            // var ul = document.getElementById('search-result');
            // ul.scrollTop += '150';
        }

        if (prev && mouseOver) {
            selectCountLi += 1;
        }

        let searchId = document.getElementById(`search-${selectCountLi}`);
        if (searchId) {
            if (prev) {
                prev.style.background = 'white';
            }
            searchId.style.background = 'red';
            prev = searchId;
            isUp = true;
            isDown = false;
            mouseOver = false;
        }

        selectCountLi++;

        



    } else if (e && e.keyCode === 38) {

        if (prev && isUp) {
            selectCountLi -= 2;
            // var ul = document.getElementById('search-result');
            // ul.scrollTop -= '150';
        }

        if (prev && mouseOver) {
            selectCountLi -= 1;
        }

        let searchId = document.getElementById(`search-${selectCountLi}`);
        if (searchId) {
            if (prev) {
                prev.style.background = 'white';
            }
            searchId.style.background = 'red';
            prev = searchId;
            isDown = true;
            isUp = false;
            mouseOver = false;
        }

        selectCountLi--;

    }

}

function onMouseOver(e) {
    let searchId = e.target.parentNode;
    if (searchId) {
        currentId = searchId.getAttribute('id');
        currentId = currentId.split('-')[1];
        selectCountLi = Number(currentId);
        if (prev) {
            prev.style.background = 'white';
        }
        searchId.style.background = 'red';
        prev = searchId;
        isDown = false;
        isUp = false;
        mouseOver = true;
    }
}
