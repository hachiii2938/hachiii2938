import { useState } from 'react';
import {
  MolecularGhost,
  MolecularOrb,
  MolecularPrimary,
  MolecularToggle,
} from '../components/game-ui/MolecularButtons';
import {
  SigilChip,
  SigilIcon,
  SigilPrimary,
} from '../components/game-ui/SigilButtons';
import {
  InkBranch,
  InkGhost,
  InkPod,
  InkPrimary,
} from '../components/game-ui/InkButtons';
import '../styles/game-ui.css';

export function GameUiPage() {
  const [molOn, setMolOn] = useState(true);
  const [sigilChip, setSigilChip] = useState<'scan' | 'link' | 'cast'>('cast');
  const [litPod, setLitPod] = useState('quest');

  return (
    <section className="page page-game-ui">
      <header className="game-ui-hero">
        <p className="game-ui-kicker">Game UI Kit</p>
        <h1 className="game-ui-title">三套視覺風格的遊戲按鍵</h1>
        <p className="game-ui-lead">
          依參考圖抽出三套可互動按鍵語言：生物科技分子（洋紅＋光澤球體）、符紋圖騰（嵌套圓與細線螺旋）、墨跡物種（有機莢果與螢光萊姆）。每套皆含主按鍵、次級、圖示與狀態切換。
        </p>
        <nav className="game-ui-toc" aria-label="風格導覽">
          <a href="#style-molecular">Molecular</a>
          <a href="#style-sigil">Sigil</a>
          <a href="#style-ink">Ink Bloom</a>
        </nav>
      </header>

      <section id="style-molecular" className="style-section style-section--molecular">
        <div className="style-header">
          <div>
            <h2>01 · Molecular Biotech</h2>
            <p>
              高光澤膠囊與球體、洋紅啟用態、半透明網格邊框。適合技能確認、實驗室／科幻 HUD、主行動 CTA。
            </p>
          </div>
          <figure className="style-ref">
            <img src={`${import.meta.env.BASE_URL}refs/style-molecular.jpg`} alt="Molecular style reference" />
          </figure>
        </div>

        <div className="btn-row">
          <p className="btn-row-label">Primary · Ghost</p>
          <MolecularPrimary>Initiate</MolecularPrimary>
          <MolecularPrimary disabled>Locked</MolecularPrimary>
          <MolecularGhost>Scan Field</MolecularGhost>
        </div>

        <div className="btn-row">
          <p className="btn-row-label">Orb icons · Toggle</p>
          <MolecularOrb aria-label="Neutral node">N</MolecularOrb>
          <MolecularOrb accent aria-label="Active node">
            A
          </MolecularOrb>
          <MolecularToggle pressed={molOn} onClick={() => setMolOn((v) => !v)}>
            {molOn ? 'Bonded' : 'Sever'}
          </MolecularToggle>
        </div>
        <p className="state-note">Hover 主鍵會從霧灰轉為洋紅光澤；切換鍵模擬分子鍵結開合。</p>
      </section>

      <section id="style-sigil" className="style-section style-section--sigil">
        <div className="style-header">
          <div>
            <h2>02 · Sigil Glyph</h2>
            <p>
              炭黑巢狀圓、水滴符體、淡紫／青綠細線尾。適合法術選單、被動技能、輕量導覽晶片。
            </p>
          </div>
          <figure className="style-ref">
            <img src={`${import.meta.env.BASE_URL}refs/style-sigil.jpg`} alt="Sigil style reference" />
          </figure>
        </div>

        <div className="btn-row">
          <p className="btn-row-label">Sigil primary</p>
          <SigilPrimary tone="cyan">Confirm</SigilPrimary>
          <SigilPrimary tone="lavender">Channel</SigilPrimary>
          <SigilPrimary tone="cyan" disabled>
            Sealed
          </SigilPrimary>
        </div>

        <div className="btn-row">
          <p className="btn-row-label">Icon · Chips</p>
          <SigilIcon tone="lavender" label="Eye">
            ◇
          </SigilIcon>
          <SigilIcon tone="cyan" label="Pulse">
            ✶
          </SigilIcon>
          <SigilChip
            tone="lavender"
            active={sigilChip === 'scan'}
            onClick={() => setSigilChip('scan')}
          >
            Scan
          </SigilChip>
          <SigilChip
            tone="lavender"
            active={sigilChip === 'link'}
            onClick={() => setSigilChip('link')}
          >
            Link
          </SigilChip>
          <SigilChip tone="cyan" active={sigilChip === 'cast'} onClick={() => setSigilChip('cast')}>
            Cast
          </SigilChip>
        </div>
        <p className="state-note">Hover 時符體填色翻轉、螺旋尾旋轉；Chip 用節點色標示選取。</p>
      </section>

      <section id="style-ink" className="style-section style-section--ink">
        <div className="style-header">
          <div>
            <h2>03 · Ink Bloom</h2>
            <p>
              墨漬莢果、點描質感、螢光萊姆啟用。適合物種圖鑑、技能樹節點、任務側欄與快捷列。
            </p>
          </div>
          <figure className="style-ref">
            <img src={`${import.meta.env.BASE_URL}refs/style-ink.jpg`} alt="Ink bloom style reference" />
          </figure>
        </div>

        <div className="btn-row">
          <p className="btn-row-label">Pod buttons</p>
          <InkPrimary>Survive</InkPrimary>
          <InkGhost>Observe</InkGhost>
          <InkPrimary disabled>Extinct</InkPrimary>
          <InkPod label="Mark" lit={litPod === 'mark'} onClick={() => setLitPod('mark')}>
            M
          </InkPod>
          <InkPod label="Trace" lit={litPod === 'trace'} onClick={() => setLitPod('trace')}>
            T
          </InkPod>
        </div>

        <div className="btn-row">
          <p className="btn-row-label">Branch / skill vine</p>
          <InkBranch
            items={[
              {
                id: 'quest',
                label: 'Quest',
                lit: litPod === 'quest',
                onClick: () => setLitPod('quest'),
              },
              {
                id: 'flora',
                label: 'Flora',
                lit: litPod === 'flora',
                onClick: () => setLitPod('flora'),
              },
              {
                id: 'lichen',
                label: 'Lichen',
                lit: litPod === 'lichen',
                onClick: () => setLitPod('lichen'),
              },
            ]}
          />
        </div>
        <p className="state-note">Hover／選取時莢果轉為萊姆螢光並帶柔光；側枝模擬墨跡生長進場。</p>
      </section>
    </section>
  );
}
