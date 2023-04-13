import express from 'express';
const router = express.Router();

import {
  DisplayAboutUsPage,
  DisplayContactPage,
  DisplayHomePage,
  DisplayProductsPage,
  DisplayServicesPage
} from "../controllers";

/* ****************************** TOP LEVEL ROUTES *************************************** */
router.get('/', DisplayHomePage);

router.get('/home', DisplayHomePage);

router.get('/about', DisplayAboutUsPage);

router.get('/products', DisplayProductsPage);

router.get('/services', DisplayServicesPage);

router.get('/contact', DisplayContactPage);

export default router;
