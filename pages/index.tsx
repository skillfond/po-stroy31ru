import type { NextPage, GetServerSideProps } from "next"
import React from "react"
import Layout from "../layout/Layout"
import { Box } from "@mui/material"
import ProductCategories from '../modules/views/ProductCategories'
import CardImage from "../modules/views/CardImage"
import ProductHero from "../modules/views/ProductHero"
import Popup from "../modules/views/Popup"
import ProductPrice from "../modules/views/ProductPrice"
import ProductValues from "../modules/views/ProductValues"
import ProductCTA from "../modules/views/ProductCTA"
import ProductSmokingHero from "../modules/views/ProductSmokingHero"
import withRoot from "../modules/withRoot"
import {
	AboutUs,
	Snackbar,
	PartnersSlider,
	Strategy,
	GetConsultation
} from "../components"
import cardsData from "../data/products"
import imagesData from "../data/images"
import { IProducts, IImages } from "../types"
import styles from "./index.module.scss"
import AppForm from "../modules/views/AppForm"
import FormButton from "../modules/form/FormButton"
import FormFeedback from "../modules/form/FormFeedback"
import RFTextField from "../modules/form/RFTextField"
import { Field, Form, FormSpy } from "react-final-form"
import { phone, required } from "../modules/form/validation"
import { sendTelegramm } from "../utils"
import ym from "react-yandex-metrika"

interface IIndexProps {
	cards: IProducts[]
	images: IImages[]
}

const Home: NextPage<IIndexProps> = ({ cards, images }) => {
	const [open, setOpen] = React.useState<boolean>(false)
	const [initialCards, setInitialCards] = React.useState<IProducts[]>(cards)
	const [initialImages, setinitialImages] = React.useState<IImages[]>(images)
	const [openPopupImage, setOpenPopupImage] = React.useState<boolean>(false)
	const [selectedImage, setSelectedImage] = React.useState<IImages>({})
	const [openSnackBar, setOpenSnackBar] = React.useState<boolean>(false)
	const [sent, setSent] = React.useState<boolean>(false)

	const handleClickOpen = (): void => {
		setOpen((pre) => !pre)
	}

	const handleClose = (): void => {
		setOpen((pre) => !pre)
	}
	
	const handleClickOpenPopupImage = (param: object): void => {
		setOpenPopupImage((pre) => !pre)
		setSelectedImage(param)
	}

	const handleClosePopupImage = (): void => {
		setOpenPopupImage((pre) => !pre)
	}

	const handleCloseSnackBar = (): void => {
		setOpenSnackBar((pre) => !pre)
	}

	const validate = (values: { [index: string]: string }) => {
		const errors = required(["firstName", "phone"], values)

		if (!errors.phone) {
			const phoneError = phone(values.phone)
			if (phoneError) {
				errors.phone = phoneError
			}
		}

		return errors
	}

	const handleSubmit = (values: { [name: string]: string }): void => {
		sendTelegramm(
			`Оформление заказа/услуги. %0AИмя: ${values.firstName}%0AТелефон: ${values.phone} %0AСообщение:${values.message}`,
		)
		setSent((pre) => !pre)
		setOpen((pre) => !pre)
		setOpenSnackBar((pre) => !pre)
		ym('reachGoal', 'submit-form-modal')
	}

	return (
		<>
			<Layout
				title='Cтроительно-отделочная компания ООО "ПоСтрой" | 
				Строительство. Отделка. Проектирование'
				desc='⭐️ Полный спектр услуг от проектирования и 
				строительства, до отделки и инженерии. Опытные строители. 
				Услуги "под ключ": ✅ строительство коммерческих и 
				некоммерческих зданий; ✅ отделка квартир, домов, 
				офисов, магазинов и нежилых помещений; ✅ монтаж 
				инженерных сетей; благоустройство территории; ✅ 
				проектирование дизайна любой сложности. ☎️ 8 (908) 787-34-44'
				ogTitle='Cтроительно-отделочная компания ООО "ПоСтрой" | 
				Строительство. Отделка. Проектирование'>
				
				<ProductHero handleClickOpen={handleClickOpen} />
				 <AboutUs />
				{cards && cards.length > 0 
				? (
					<ProductPrice
						initialCards={initialCards}
						title='Наши услуги'
					/>
				  ) 
				: (<></>)}
				<ProductValues />
				<Strategy />
				<GetConsultation />
				<ProductCategories 
					title='Наши работы'
					initialImages={initialImages} 
					handleClickOpen={handleClickOpenPopupImage}
				/>
				<section className={styles.partners}>
					<div className={styles.partners__container}>
						<h2 className={styles.partners__title}>
							Наши партнёры
						</h2>
						<PartnersSlider />
					</div>
				</section>
				<ProductCTA />
				<section className={styles.productHero}>
					<ProductSmokingHero />
				</section>
			</Layout>
			<Popup 
				open={open} 
				onClose={handleClose}>
				<AppForm>
					<Form
						onSubmit={handleSubmit}
						subscription={{ submitting: true }}
						validate={validate}>
						{({ handleSubmit: handleSubmit2, submitting }) => (
							<Box
								component='form'
								onSubmit={handleSubmit2}
								noValidate
								sx={{ mt: 2 }}>
								<Field
									autoFocus
									component={RFTextField}
									disabled={submitting || sent}
									autoComplete='given-name'
									fullWidth
									label='Имя'
									name='firstName'
									required
								/>
								<Field
									fullWidth
									component={RFTextField}
									disabled={submitting || sent}
									autoComplete='Phone'
									label='Телефон'
									margin='normal'
									name='phone'
									required
								/>
								<Field
									autoComplete='Text'
									component={RFTextField}
									disabled={submitting || sent}
									fullWidth
									label='Ваше сообщение'
									margin='normal'
									name='message'
								/>
								<FormSpy subscription={{ submitError: true }}>
									{({ submitError }) =>
										submitError ? (
											<FormFeedback error sx={{ mt: 2 }}>
												{submitError}
											</FormFeedback>
										) : null
									}
								</FormSpy>
								<FormButton
									sx={{ mt: 3, mb: 2 }}
									disabled={submitting || sent}
									color='secondary'
									fullWidth>
									{submitting || sent ? "Отправлено" : "Заказать звонок"}
								</FormButton>
							</Box>
						)}
					</Form>
				</AppForm>
			</Popup>
			<Popup 
				open={openPopupImage}
				onClose={handleClosePopupImage}
			>
					<CardImage
						url={selectedImage.url}
						title={selectedImage.title}
				    />
			</Popup>
			<Snackbar
				open={openSnackBar}
				closeFunc={handleCloseSnackBar}
				message='В ближайшее время с Вами свяжется наш специалист!'
			/>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const cards: IProducts[] = cardsData
	const images: IImages[] = imagesData
	return {
		props: {
			cards,
			images,
		},
	}
}

export default withRoot(Home)