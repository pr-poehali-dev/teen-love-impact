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
