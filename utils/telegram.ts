const sendTelegramm = async (text: string): Promise<void> => {
	const chat_id: number = -630523991
	try {
		await fetch(
			`https://api.telegram.org/bot5164282329:AAEfQlK9ESBftB09BXbr7PZXxmtp5TKrWvg/sendMessage?chat_id=${chat_id}&text=${text}`,
		)
	} catch (error) {
		throw new Error(`Ошибка в отправке сообщения`)
	}
}

export default sendTelegramm