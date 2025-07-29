// Projects.js
import React from 'react';

function Projects() {
  return (
    <section className="px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Projects</h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">おみくじアプリ</h3>

        <p className="text-gray-700 mb-4">
          <strong className="block text-lg text-gray-800 mb-1">🧧 なぜおみくじアプリを作ったのか（制作背景）</strong>
          保育士として子どもたちと関わる中で、「楽しい体験」が人の心を動かす力を持っていることを実感してきました。
          Webの世界でも、そんな「ちょっとワクワクする体験」を届けられる仕組みを作ってみたいと思い、身近で親しみやすい「おみくじ」を題材にアプリを制作しました。
        </p>

        <p className="text-gray-700 mb-4">
          <strong className="block text-lg text-gray-800 mb-1">🎯 おみくじアプリでこだわったポイント</strong>
          ・結果の履歴や出現回数を残すことで、繰り返し引いても面白さが続くように工夫しました。<br />
          ・結果ごとに「出やすさ（重み）」を設定し、ただのランダムではなく、現実的なバランスで結果が出るようにしました。
        </p>

        <ul className="list-disc list-inside space-y-2 text-blue-600">
          <li>
            <a
              href="https://meitomi.github.io/omikuji-app-v2/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              デモページを見る
            </a>
          </li>
          <li>
            <a
              href="https://github.com/MEITOMI/omikuji-app-v2"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub リポジトリ
            </a>
          </li>
          <li className="text-gray-800">使用技術：HTML / CSS / JavaScript</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
