import styles from './app.module.css'
import { useState } from 'react'
// import logo from './logo.svg'
// import PropTypes from 'prop-types'

//! PropTypes импортируется из пакета prop-types
// const Product = ({ name, price, initialAmount }) => {
// 	const [amount, setAmount] = useState(initialAmount)
// 	return (
// 		<>
// 			<div>
// 				{name} - {price} руб
// 			</div>
// 			<div>Количество: {amount}</div>
// 			{/* <Basket amount={amount} /> */}
// 		</>
// 	)
// }

// Product.propTypes = {
// 	name: PropTypes.string,
// 	price: PropTypes.number,
// }

//! One-way data flow (Однонаправленный поток данных)
//! Проброс callback в props
// const Counter = ({ valueCounter, setValueCounter }) => {
// 	return (
// 		<>
// 			<div>{valueCounter}</div>
// 			<button onClick={() => setValueCounter(valueCounter + 1)}>+1</button>
// 		</>
// 	)
// }

// export const App = () => {
// 	const [valueAppState, setvalueAppState] = useState(0)

// 	return (
// 		<div className={styles.app}>
// 			<label>Счётчик:</label>
// 			<Counter
// 				valueCounter={valueAppState}
// 				setValueCounter={setvalueAppState}
// 			/>
// 		</div>
// 	)
// }

//! Single Source of Truth (Единый источник истины)
// const Counter = ({ valueCounter, setValueCounter }) => {
// 	return (
// 		<>
// 			<div>{valueCounter}</div>
// 			<button onClick={() => setValueCounter(valueCounter + 1)}>
// 				{valueCounter}+1
// 			</button>
// 		</>
// 	)
// }

// export const App = () => {
// 	const [valueAppState, setvalueAppState] = useState(0)

// 	return (
// 		<div className={styles.app}>
// 			<label>Счётчик: {valueAppState}</label>
// 			<Counter
// 				valueCounter={valueAppState}
// 				setValueCounter={setvalueAppState}
// 			/>
// 		</div>
// 	)
// }

//! Разделение компонентов по их функциональной роли:                   Stateful и stateless-компоненты
//! Stateless-компонент
const AppLayout = ({ a, b, setA, setB, sum }) => (
	<div className={styles.app}>
		<div>A: {a}</div>
		<button onClick={() => setA(a + 1)}>Прибавить 1 к A</button>
		<div>B: {b}</div>
		<button onClick={() => setB(b + 1)}>Прибавить 1 к B</button>
		<div>Сумма A + B: {sum}</div>
	</div>
)
//! Stateful-компонент
export const App = () => {
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)

	const sum = a + b

	return <AppLayout a={a} b={b} setA={setA} setB={setB} sum={sum} />
}
