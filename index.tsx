import React from 'react';
import { Briefcase, TrendingUp, Users, Book, Clock, Target } from 'lucide-react';

const SideHustleCommunity = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">副业圈</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">首页</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">成功案例</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">学习资源</a>
              <a href="#" className="text-gray-600 hover:text-blue-600">社区讨论</a>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
              加入我们
            </button>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-6">专注35+职场人的副业发展平台</h1>
            <p className="text-xl mb-8">利用您的专业技能和经验，开启属于您的副业之旅。我们提供系统化的指导和真实的社群支持。</p>
            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100">
                免费体验
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-blue-500">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 核心优势 */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">为什么选择我们？</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Clock />}
              title="灵活时间"
              description="完全自主掌控时间，适合工作繁忙的上班族，随时随地都能学习和实践。"
            />
            <FeatureCard 
              icon={<Target />}
              title="精准定位"
              description="专注35+人群的特点和需求，提供最适合的副业方向和发展路径。"
            />
            <FeatureCard 
              icon={<Users />}
              title="真实社群"
              description="汇聚各行各业的专业人士，互帮互助，共同成长。"
            />
          </div>
        </div>
      </div>

      {/* 成功案例 */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">他们都实现了副业梦想</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessStoryCard 
              role="IT工程师"
              achievement="技术博主"
              description="利用8年工作经验，开设技术培训课程，月收入增加15000元。"
            />
            <SuccessStoryCard 
              role="人力资源总监"
              achievement="职业规划师"
              description="帮助200+求职者实现职业转型，建立个人咨询品牌。"
            />
            <SuccessStoryCard 
              role="市场经理"
              achievement="自媒体创作者"
              description="分享职场经验，粉丝超10万，带来可观广告收入。"
            />
          </div>
        </div>
      </div>

      {/* 加入社区 */}
      <div className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好开始您的副业之旅了吗？</h2>
          <p className="text-xl mb-8">加入我们的社区，和数千名志同道合的职场人一起，开创属于自己的事业第二曲线。</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100">
            立即加入
          </button>
        </div>
      </div>

      {/* 页脚 */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">副业圈</h3>
              <p>让每个职场人都能实现副业理想</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">关于我们</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">公司介绍</a></li>
                <li><a href="#" className="hover:text-white">联系我们</a></li>
                <li><a href="#" className="hover:text-white">加入团队</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">资源中心</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">学习指南</a></li>
                <li><a href="#" className="hover:text-white">成功案例</a></li>
                <li><a href="#" className="hover:text-white">行业资讯</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">关注我们</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">微信公众号</a></li>
                <li><a href="#" className="hover:text-white">知乎</a></li>
                <li><a href="#" className="hover:text-white">小红书</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>© 2025 副业圈. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// 特色卡片组件
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg text-center">
      <div className="w-12 h-12 mx-auto mb-4 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// 成功案例卡片组件
const SuccessStoryCard = ({ role, achievement, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="mb-4">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
          {role}
        </span>
        <span className="ml-2 bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
          {achievement}
        </span>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SideHustleCommunity;
