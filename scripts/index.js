/** @format */

const data = [
	{
		id: 1,
		name: 'Odinabonu',
		userName: 'Saidnazarova',
		age: 123,
		key: 'Odinabonu',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 2,
		name: 'Xusanov',
		userName: '',
		age: 123,
		key: 'Xusanov',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 3,
		name: 'Abdurahmon',
		userName: 'Otajonov',
		age: 123,
		key: 'Abdurahmon',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 4,
		name: ' Hojiakbar ',
		userName: 'Murodillayev',
		age: 123,
		key: 'Hojiakbar ',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 5,
		name: 'Maxsutaliyev',
		userName: 'Abdulaziz',
		age: 123,
		key: 'Maxsutaliyev',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 6,
		name: 'Azizbek',
		userName: 'Tohirov',
		age: 123,
		key: 'Azizbek',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 7,
		name: 'Sobirjon',
		userName: 'Fayzullayev',
		age: 123,
		key: 'Sobirjon',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 8,
		name: 'Asilbek',
		userName: 'Sadullayev',
		age: 123,
		key: 'Asilbek',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 9,
		name: 'Ruqiya',
		userName: 'Zohidova',
		age: 123,
		key: 'Ruqiya',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 10,
		name: 'Zuhriddin',
		userName: 'Nuraliev',
		age: 123,
		key: 'Zuhriddin',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
	{
		id: 11,
		name: 'Sayfiddin',
		userName: 'G`ofurov',
		age: 123,
		key: 'Sayfiddin',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste neque sed dignissimos suscipit reiciendis quam adipisci delectus ea itaque enim, quia aperiam vitae quasi optio, est quaerat molestiae. Ad sunt repellendus id. Deserunt, ullam distinctio pariatur nam corrupti ut!',
	},
];

const input = document.getElementById('input');
const mapMain = document.getElementById('insetMain');
const paramBlock = document.getElementById('paramBlock');
const paramBlockInset = document.getElementById('paramBlockInset');
let inputValue = '';
let view = true;

document
	.getElementById('backButton')
	.addEventListener('click', () => renderBlocks());
input.addEventListener('input', (e) => {
	inputValue = e.target.value;
});
function render() {
	mapMain.innerHTML = data
		.map(
			(value) =>
				
				value.key === inputValue &&
				`
		<div class="mainSelect" onclick="renderBlocks(${value.id})">${value.name}</div>
	`,
		)
		.filter(Boolean)
		.join('');
}

function renderBlocks(id) {
	paramBlock.style.display = view ? 'none' : 'block';
	mapMain.style.display = view ? 'block' : 'none';
	view = !view;
	paramInsetFunc(id);
}

function paramInsetFunc(id) {
	paramBlockInset.innerHTML = data
		.map(
			(value) =>
				value.id == id &&
				`
			<div>
				<h1>Welcome <span style='border-bottom: 3px solid teal;'>${value.name} ${value.userName}</span></h1>
				<br><br>
				<p class='paramDesc'>${value.desc}<p>
			</div>
		`,
		)
		.filter(Boolean)
		.join('');
}

renderBlocks();
render();
