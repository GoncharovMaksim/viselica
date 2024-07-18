const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Подключение к MongoDB
mongoose.connect('mongodb://localhost/hangman', { useNewUrlParser: true, useUnifiedTopology: true });

// Модель пользователя
const UserSchema = new mongoose.Schema({
  username: String,
  password: String, // Добавляем поле для пароля
  wins: Number,
  losses: Number
});
const User = mongoose.model('User', UserSchema);

// Регистрация пользователя
app.post('/register', async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
      user = new User({
        username: req.body.username,
        password: req.body.password, // Сохраняем пароль
        wins: 0,
        losses: 0
      });
      await user.save();
      res.json({ success: true }); // Отправляем подтверждение успешной регистрации
    } else {
      res.status(400).json({ success: false, message: 'Пользователь уже существует' });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Обновление статистики пользователя
app.post('/updateStats', async (req, res) => {
  try {
    let user = await User.findOne({ username: req.body.username });
    if (user) {
      if (req.body.win) {
        user.wins++;
      } else {
        user.losses++;
      }
      await user.save();
      res.json(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
