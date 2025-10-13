import React, { useEffect, useState, useRef } from 'react';
import { Card, Progress, Button, Modal, message, Table, Avatar, Tag } from 'antd';
import { GiftOutlined, StarOutlined, CrownOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import coffe from '../assets/Rectangle10.webp'

export default function RewardsPage() {
  const [points, setPoints] = useState(320);
  const [nextRewardAt, setNextRewardAt] = useState(500);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [redeemTarget, setRedeemTarget] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const [rewards] = useState([
    { id: 1, title: 'Free Small Coffee', cost: 500, desc: 'Enjoy a free small coffee on us', img: '/images/free-coffee.png' },
    { id: 2, title: '50% Off Any Drink', cost: 800, desc: 'Half-price on any drink', img: '/images/discount.png' },
    { id: 3, title: 'Free Pastry', cost: 300, desc: 'Choose any pastry for free', img: '/images/pastry.png' },
    { id: 4, title: 'Merch: Mug', cost: 1200, desc: 'Limited edition mug', img: '/images/mug.png' },
    { id: 3, title: 'Free Pastry', cost: 300, desc: 'Choose any pastry for free', img: '/images/pastry.png' },
    { id: 3, title: 'Free Pastry', cost: 300, desc: 'Choose any pastry for free', img: '/images/pastry.png' },
  ]);

  const leaderboardData = [
    { key: '1', rank: 1, name: 'Aziza', points: 1500 },
    { key: '2', rank: 2, name: 'Yusuf', points: 1420 },
    { key: '3', rank: 3, name: 'Bekzod', points: 1200 },
    { key: '4', rank: 4, name: 'Nilufar', points: 980 },
  ];

  const columns = [
    {
      title: 'Rank',
      dataIndex: 'rank',
      key: 'rank',
      render: (r) => (
        <div className="flex items-center gap-2">
          {r === 1 ? <CrownOutlined style={{ color: '#47402cff' }} /> : r === 2 ? <StarOutlined /> : <Tag>{r}</Tag>}
        </div>
      ),
      width: 80,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name) => (
        <div className="flex items-center gap-3">
          <Avatar>{name.charAt(0)}</Avatar>
          <span>{name}</span>
        </div>
      ),
    },
    {
      title: 'Points',
      dataIndex: 'points',
      key: 'points',
      align: 'right',
    },
  ];

  const progressPercent = Math.min(Math.round((points / nextRewardAt) * 100), 100);

  const openRedeem = (reward) => {
    setRedeemTarget(reward);
    setShowRedeemModal(true);
  };

  const handleConfirmRedeem = () => {
    if (!redeemTarget) return;
    if (points < redeemTarget.cost) {
      message.error("Sizda yetarli ball yo'q — ko'proq iching va yana urinib ko'ring!");
      setShowRedeemModal(false);
      return;
    }

    setPoints((p) => p - redeemTarget.cost);
    setShowRedeemModal(false);
    message.success(`"${redeemTarget.title}" uchun muvaffaqiyatli almashdingiz!`);

    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3500);
  };

  const earnPoints = (amount) => {
    setPoints((p) => p + amount);
    message.success(`+${amount} points`);
  };

  const confettiRef = useRef(null);

  useEffect(() => {
    // Example: setNextRewardAt(500);
  }, []);

  return (
    <div className="p-6 md:p-12">
      {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-green-600 to-black-500 text-white p-8 md:p-12 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-3xl montserrent md:text-4xl font-extrabold leading-tight">
                Earn Rewards with Every Sip ☕
              </h1>
              <p className="mt-2 opacity-95 max-w-xl montserrent">
                Join our loyalty program and get free coffee, discounts, and exclusive merch. The more you sip, the more you earn!
              </p>

              <div className="mt-6 flex gap-3">
                <Button className='montserrent' type="primary" onClick={() => earnPoints(50)}>
                  Buy a Coffee (+50)
                </Button>
                <Button className='montserrent' onClick={() => earnPoints(100)}>Invite Friend (+100)</Button>
              </div>
            </div>
            <div className="w-full md:w-96">
              <Card className="rounded-2xl bg-white/10 border-0 shadow-none">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold montserrent">Your Points</h3>
                    <p className="text-3xl montserrent font-extrabold">{points}</p>
                    <p className="text-sm opacity-80">Next reward at {nextRewardAt} points</p>
                  </div>
                  <div className="w-28">
                    <Progress
                      type="circle"
                      percent={progressPercent}
                      width={80}
                      strokeColor={{ '0%': '#ffd700', '100%': '#ff7a18' }}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Progress percent={progressPercent} showInfo={false} strokeLinecap="round" />
                  <div className="mt-3 flex gap-2">
                    <Button className='montserrent' onClick={() => message.info('Your history is coming soon!')}>
                      View History
                    </Button>
                    <Button className='montserrent' type="primary" onClick={() => message.info('Redirect to ordering...')}>
                      Order Now
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl text-white montserrent font-bold mb-4">Available Rewards</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((r) => (
                <motion.div
                  key={r.id}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden"
                >
                  <div className="p-4 flex flex-col h-full">
                    <img src={coffe} alt={r.title} className="h-40 w-full object-cover rounded-xl" />
                    <div className="mt-3 flex-1">
                      <h3 className="text-lg font-semibold">{r.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{r.desc}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GiftOutlined />
                        <span className="font-semibold">{r.cost} pts</span>
                      </div>
                      <Button
                        type="primary"
                        onClick={() => openRedeem(r)}
                        disabled={points < r.cost}
                      >
                        Redeem
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl montserrent font-semibold mb-4">How to Earn Points</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border">
                  <p className="font-semibold montserrent">Buy any coffee</p>
                  <p className="text-sm montserrent text-gray-500">+50 points</p>
                </div>
                <div className="p-4 rounded-lg border">
                  <p className="font-semibold montserrent">Invite a friend</p>
                  <p className="text-sm montserrent text-gray-500">+100 points</p>
                </div>
                <div className="p-4 rounded-lg border">
                  <p className="font-semibold montserrent">On your birthday</p>
                  <p className="text-sm text-gray-500 montserrent">+200 points</p>
                </div>
                <div className="p-4 rounded-lg border">
                  <p className="font-semibold montserrent">Write a review</p>
                  <p className="text-sm text-gray-500 montserrent">+30 points</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 montserrent text-white">Leaderboard</h2>
            <Card className="rounded-2xl">
              <Table dataSource={leaderboardData} columns={columns} pagination={false} />
            </Card>
            <div className="mt-6 bg-white rounded-2xl p-4 shadow-sm">
              <h3 className="font-semibold montserrent">Tiers</h3>
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center justify-between px-3 py-2 rounded-lg border">
                  <div>
                    <p className="font-semibold montserrent">Bronze</p>
                    <p className="text-sm text-gray-500 montserrent">0 - 499 pts</p>
                  </div>
                  <Tag className='montserrent'>Basic</Tag>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg border">
                  <div>
                    <p className="font-semibold montserrent">Silver</p>
                    <p className="text-sm text-gray-500 montserrent">500 - 1199 pts</p>
                  </div>
                  <Tag className='montserrent' color="silver">+ Perks</Tag>
                </div>
                <div className="flex items-center justify-between px-3 py-2 rounded-lg border">
                  <div>
                    <p className="font-semibold montserrent">Gold</p>
                    <p className="text-sm text-gray-500 montserrent">1200+ pts</p>
                  </div>
                  <Tag className='montserrent' color="gold">VIP</Tag>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          open={showRedeemModal}
          title={redeemTarget?.title || 'Redeem Reward'}
          onCancel={() => setShowRedeemModal(false)}
          onOk={handleConfirmRedeem}
          okText="Confirm Redeem"
        >
          <div className="space-y-3">
            <p className="font-semibold montserrent">Cost: {redeemTarget?.cost} points</p>
            <p className="text-sm montserrent text-gray-500">{redeemTarget?.desc}</p>
            <p className="text-sm montserrent text-gray-400">Your points: {points}</p>
            {redeemTarget && points < redeemTarget.cost && (
              <p className="text-red-500 montserrent">Sizda yetarli ball yo'q</p>
            )}
          </div>
        </Modal>
        <div className="mt-12 text-center opacity-80">
          <p className="text-lg montserrent text-white">
            Keep sipping. Keep earning. Rewards never tasted this good ☕
          </p>
        </div>
      </motion.div>
    </div>
  );
}
