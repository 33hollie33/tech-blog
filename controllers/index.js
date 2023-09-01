const router = require('express').Router();
const userRoutes = require('./userRoutes.js');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const homeRoutes = require('./homeRoutes');
const dashboardRoutes = require ('./dashboardRoutes');

router.use('/api/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;