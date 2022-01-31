const express = require('express');

const getInstagramProfile = require('../utils/getInstagramProfile');

const router = new express.Router();

router.get('/profile/:username', async (req, res) => {
  try {
    const { username } = req.params;

    const userInfo = await getInstagramProfile(username);

    res.send({
      status: 200,
      data: userInfo,
      success: true,
      message: 'Successful',
    });
  } catch (error) {
    res.status(404).send({
      status: res.status,
      data: null,
      success: false,
      message: 'Failed',
    });
  }
});

module.exports = router;
