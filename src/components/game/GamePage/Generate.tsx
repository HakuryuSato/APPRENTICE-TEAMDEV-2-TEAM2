import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GeneratedImage } from '../GeneratedImage';

export const Generate: React.FC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [generateImage, setGenerateImage] = useState<string>('');
  const [round, setRound] = useState<number>(1); // ラウンド状態を管理

  const imageUrl =
    'https://images.unsplash.com/photo-1736010755388-68a7d4cc0d62?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  // 入力されたテキスト
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputText(e.target.value);
  };

  // 画像生成ボタン
  const handleClickGenerate = () => {
    if (!inputText.trim()) {
      alert('テキストを入力してください');
      return;
    }

    console.log('生成しました');
    // 画像生成APIを呼び出しはまだ
    setGenerateImage('生成された画像です');
    setInputText('');
  };

  const handleClickNext = () => {
    // voteに移動する処理はまだ
    setGenerateImage('');
    setRound(round + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4 p-4">
      <div>テーマ：かっこいいやつ</div>
      {!generateImage ? (
        <>
          {round === 1 ? (
            <div>最初のラウンドです。画像はありません。</div>
          ) : (
            <>
              <div>前回ラウンドの画像</div>
              <GeneratedImage className="w-full" url={imageUrl} />
            </>
          )}
          <Input
            value={inputText}
            onChange={handleChangeInput}
            placeholder="画像生成のためのテキストを入力してください"
            className="w-full"
          />
          <Button onClick={handleClickGenerate} className="w-full rounded-lg">
            生成する
          </Button>
        </>
      ) : (
        <>
          <div className="text-xl font-bold mt-4">{generateImage}</div>
          <Button onClick={handleClickNext} className="w-full rounded-lg">
            次へ(戻る)
          </Button>
        </>
      )}
    </div>
  );
};
