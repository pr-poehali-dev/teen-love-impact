import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const statsData = [
    { label: 'Испытывали влюблённость', value: 87, color: 'bg-gradient-to-r from-pink-500 to-purple-500' },
    { label: 'Изменили поведение', value: 73, color: 'bg-gradient-to-r from-purple-500 to-blue-500' },
    { label: 'Улучшилась успеваемость', value: 42, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { label: 'Снизилась успеваемость', value: 28, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
  ];

  const influenceCards = [
    {
      icon: 'Brain',
      title: 'Изменение мышления',
      description: 'Повышается креативность, но снижается концентрация на учёбе. Мозг переключается на объект влюблённости.',
      emoji: '🧠'
    },
    {
      icon: 'Heart',
      title: 'Эмоциональные качели',
      description: 'Резкие перепады настроения: от эйфории до тревоги. Повышается чувствительность к мнению окружающих.',
      emoji: '❤️'
    },
    {
      icon: 'Users',
      title: 'Социальное поведение',
      description: 'Изменяется круг общения, появляется желание произвести впечатление, меняется стиль одежды и речи.',
      emoji: '👥'
    },
    {
      icon: 'Zap',
      title: 'Энергия и мотивация',
      description: 'Прилив сил и желание самосовершенствоваться, но одновременно может снизиться интерес к прежним хобби.',
      emoji: '⚡'
    },
  ];

  const scienceCards = [
    {
      icon: 'Sparkles',
      title: 'Дофамин',
      description: 'Гормон удовольствия. При влюблённости его уровень повышается на 25-40%, создавая ощущение счастья и эйфории.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: 'Heart',
      title: 'Окситоцин',
      description: 'Гормон привязанности. Отвечает за чувство близости и доверия к объекту симпатии.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: 'Flame',
      title: 'Адреналин',
      description: 'При виде объекта влюблённости учащается сердцебиение, повышается давление, появляется волнение.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: 'Moon',
      title: 'Серотонин',
      description: 'Его уровень снижается на 40%, что объясняет навязчивые мысли об объекте влюблённости.',
      color: 'from-blue-500 to-indigo-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300/20 via-purple-300/20 to-blue-300/20"></div>
        
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block animate-float mb-6">
            <div className="text-8xl">💝</div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Влюблённость и подросток
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 animate-fade-in max-w-3xl mx-auto">
            Научное исследование о том, как первая любовь влияет на психологию, поведение и жизнь подростков
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center animate-fade-in">
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-gradient-to-r from-pink-100 to-purple-100">
              11 класс
            </Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-gradient-to-r from-purple-100 to-blue-100">
              Обществознание
            </Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4 bg-gradient-to-r from-blue-100 to-cyan-100">
              2024-2025
            </Badge>
          </div>
        </div>
      </section>

      <section id="influence" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Влияние на подростка
            </h2>
            <p className="text-xl text-gray-600">
              Как влюблённость меняет поведение, мышление и эмоции
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {influenceCards.map((card, index) => (
              <Card 
                key={index} 
                className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{card.emoji}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-800">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="psychology" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Психология влюблённости
            </h2>
            <p className="text-xl text-gray-600">
              Что происходит в мозге подростка на химическом уровне
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {scienceCards.map((card, index) => (
              <Card 
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${card.color} flex items-center justify-center`}>
                      <Icon name={card.icon} size={32} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-br from-purple-100 to-blue-100 border-2 border-purple-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <Icon name="Lightbulb" size={40} className="text-purple-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-purple-900">
                    Интересный факт
                  </h3>
                  <p className="text-purple-800 text-lg leading-relaxed">
                    Исследования показывают, что активность мозга влюблённого подростка похожа на активность мозга человека 
                    с обсессивно-компульсивным расстройством. Именно поэтому возникают навязчивые мысли об объекте симпатии.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="research" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Исследование и статистика
            </h2>
            <p className="text-xl text-gray-600">
              Результаты опроса 200 подростков 15-17 лет
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {statsData.map((stat, index) => (
              <Card key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{stat.label}</h3>
                    <Badge className={`${stat.color} text-white text-lg px-4 py-1`}>
                      {stat.value}%
                    </Badge>
                  </div>
                  <Progress value={stat.value} className="h-4" />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-pink-500 to-purple-500 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-2">14-16</div>
                <p className="text-lg opacity-90">Средний возраст первой влюблённости</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-2">3-6</div>
                <p className="text-lg opacity-90">Месяцев длится первая влюблённость</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold mb-2">65%</div>
                <p className="text-lg opacity-90">Испытывают стресс и тревожность</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Советы подросткам
            </h2>
            <p className="text-xl text-gray-600">
              Как справиться с влюблённостью и не потерять себя
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">📚</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Не забывай об учёбе</h3>
                <p className="text-gray-700 text-center">
                  Влюблённость пройдёт, а знания останутся. Выдели время и для чувств, и для развития.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">🗣️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Говори о чувствах</h3>
                <p className="text-gray-700 text-center">
                  Не держи эмоции в себе. Поговори с друзьями, родителями или психологом.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">🎯</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Оставайся собой</h3>
                <p className="text-gray-700 text-center">
                  Не меняй себя ради другого человека. Настоящая любовь принимает тебя таким, какой ты есть.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">⚖️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Баланс важен</h3>
                <p className="text-gray-700 text-center">
                  Не забывай о друзьях, семье и хобби. Здоровые отношения не изолируют от мира.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">🧘</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Управляй эмоциями</h3>
                <p className="text-gray-700 text-center">
                  Учись понимать свои чувства. Медитация, спорт и хобби помогают справиться с волнением.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-indigo-50 to-violet-50 border-2 border-indigo-200 hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="text-4xl mb-4 text-center">💪</div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 text-center">Развивай себя</h3>
                <p className="text-gray-700 text-center">
                  Используй прилив энергии для саморазвития: спорт, творчество, новые навыки.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              Стадии влюблённости
            </h2>
            <p className="text-xl text-gray-600">
              Как развиваются романтические чувства у подростков
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <Card className="bg-gradient-to-br from-pink-100 to-rose-100 border-2 border-pink-300 hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Симпатия</h3>
                <p className="text-sm text-gray-600">Первые мысли о человеке, интерес к его жизни</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-100 to-pink-100 border-2 border-purple-300 hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Увлечение</h3>
                <p className="text-sm text-gray-600">Частые мысли, волнение при встрече, попытки привлечь внимание</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-300 hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Влюблённость</h3>
                <p className="text-sm text-gray-600">Пик эмоций, идеализация объекта, сильные переживания</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-100 to-cyan-100 border-2 border-blue-300 hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Привязанность</h3>
                <p className="text-sm text-gray-600">Спокойные чувства, доверие, желание быть рядом</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-100 to-emerald-100 border-2 border-green-300 hover:scale-105 transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">Зрелая любовь</h3>
                <p className="text-sm text-gray-600">Глубокое понимание, уважение, поддержка партнёра</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Мифы и реальность
            </h2>
            <p className="text-xl text-gray-600">
              Развенчиваем популярные заблуждения о первой любви
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="X" size={32} className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-red-700">Миф</h3>
                    <p className="text-gray-700">"Первая любовь всегда навсегда"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Check" size={32} className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-700">Реальность</h3>
                    <p className="text-gray-700">Только 2% пар остаются вместе после школы. Первая любовь — это опыт, а не судьба.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="X" size={32} className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-red-700">Миф</h3>
                    <p className="text-gray-700">"Влюблённость мешает учиться"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Check" size={32} className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-700">Реальность</h3>
                    <p className="text-gray-700">42% подростков улучшили успеваемость, желая произвести впечатление.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="X" size={32} className="text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-red-700">Миф</h3>
                    <p className="text-gray-700">"Подростковая любовь несерьёзна"</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Check" size={32} className="text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-green-700">Реальность</h3>
                    <p className="text-gray-700">Чувства подростков такие же сильные, как у взрослых. Просто меньше опыта их обработки.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Влияние на разные сферы жизни
            </h2>
            <p className="text-xl text-gray-600">
              Комплексный взгляд на изменения в жизни подростка
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border-2 hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Позитивные эффекты</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Развитие эмпатии и понимания других людей</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Повышение самооценки при взаимности чувств</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Стимул к самосовершенствованию и развитию</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Приобретение опыта построения отношений</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 text-xl">✓</span>
                    <span className="text-gray-700">Развитие эмоционального интеллекта</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 hover:shadow-2xl transition-all">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                    <Icon name="AlertTriangle" size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Негативные эффекты</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">!</span>
                    <span className="text-gray-700">Снижение концентрации на учёбе и важных делах</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">!</span>
                    <span className="text-gray-700">Риск депрессии при неразделённых чувствах</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">!</span>
                    <span className="text-gray-700">Конфликты с друзьями из-за нехватки времени</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">!</span>
                    <span className="text-gray-700">Эмоциональная нестабильность и перепады настроения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-500 text-xl">!</span>
                    <span className="text-gray-700">Зависимость от мнения объекта влюблённости</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Роль родителей и учителей
            </h2>
            <p className="text-xl text-gray-600">
              Как взрослые могут помочь подростку в этот период
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border-2 border-blue-200 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
                  <h3 className="text-2xl font-bold text-gray-800">Родители</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Heart" size={20} className="text-pink-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Проявлять эмпатию, вспомнить свою первую любовь</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="MessageCircle" size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Поддерживать открытый диалог без осуждения</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Shield" size={20} className="text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Давать советы по безопасности в отношениях</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Users" size={20} className="text-purple-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Не запрещать, а помогать выстраивать границы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-purple-200 hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">👨‍🏫</div>
                  <h3 className="text-2xl font-bold text-gray-800">Учителя</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icon name="Eye" size={20} className="text-indigo-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Замечать изменения в поведении ученика</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Book" size={20} className="text-cyan-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Обсуждать тему отношений на классных часах</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="Target" size={20} className="text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Помогать сохранять баланс учёбы и личной жизни</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="HandHeart" size={20} className="text-rose-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Быть доступными для конфиденциальных разговоров</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Методология исследования
            </h2>
            <p className="text-xl text-gray-600">
              Как проводилось исследование для этого проекта
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">200</div>
                <p className="text-gray-600">респондентов опрошено</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center">
                  <Icon name="School" size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">5</div>
                <p className="text-gray-600">школ участвовало</p>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-xl transition-all">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                  <Icon name="Calendar" size={32} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">2</div>
                <p className="text-gray-600">месяца длилось исследование</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white border-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">Этапы исследования</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Анкетирование</h4>
                  <p className="text-sm text-gray-600">Онлайн-опрос подростков 15-17 лет</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Интервью</h4>
                  <p className="text-sm text-gray-600">Глубинные беседы с 30 участниками</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Анализ</h4>
                  <p className="text-sm text-gray-600">Обработка данных и научной литературы</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">Выводы</h4>
                  <p className="text-sm text-gray-600">Формулировка рекомендаций</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="BookOpen" size={64} className="mx-auto mb-6 text-purple-600" />
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Выводы исследования
          </h2>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <ul className="text-left space-y-4 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <span>Влюблённость — естественный этап развития подростка, важный для эмоционального созревания</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <span>Химические процессы в мозге объясняют изменения в поведении и настроении</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <span>Важна поддержка взрослых для правильного прохождения этого периода</span>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="Check" className="text-green-500 mt-1 flex-shrink-0" size={24} />
                <span>Необходимо научиться балансировать между чувствами и ответственностью</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 text-center text-gray-600 bg-white">
        <p className="text-lg">
          Индивидуальный проект по обществознанию • 11 класс • 2024-2025 учебный год
        </p>
      </footer>
    </div>
  );
};

export default Index;