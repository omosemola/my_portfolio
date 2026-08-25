import React, { useState } from 'react';
import { Copy, Check, Play, X, Minus, Square } from 'lucide-react';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'architecture' | 'stack' | 'status'>('terminal');
  const [copied, setCopied] = useState(false);
  const [commandOutput, setCommandOutput] = useState<string[]>([]);
  const [isExecuting, setIsExecuting] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const runSimulatedCommand = (cmd: string) => {
    if (isExecuting) return;
    setIsExecuting(true);
    setCommandOutput([`$ richard-cli ${cmd}`, '⚡ Initializing environment...']);

    setTimeout(() => {
      if (cmd === 'deploy --prod') {
        setCommandOutput((prev) => [
          ...prev,
          '📦 Compiling TypeScript & building client bundle...',
          '🔒 Verifying Supabase RLS policies & JWT keys...',
          '💳 Validating Paystack webhook endpoints...',
          '✨ Deployment successful! Live at https://lightsonmarketplace.com',
        ]);
      } else if (cmd === 'test --coverage') {
        setCommandOutput((prev) => [
          ...prev,
          '✓ Auth & Session Token Handlers (12 tests) PASS',
          '✓ Multi-vendor Escrow Payment Split (8 tests) PASS',
          '✓ Responsive DOM & Cart Reducer (15 tests) PASS',
          '📊 100% test suites passed (35/35)',
        ]);
      } else {
        setCommandOutput((prev) => [
          ...prev,
          '⚡ System Status: ALL PRODUCTION SYSTEMS OPERATIONAL',
          '● Database: PostgreSQL 16 (Connected)',
          '● Auth: Supabase Auth (Active)',
          '● Latency: 18ms (Edge Cached)',
        ]);
      }
      setIsExecuting(false);
    }, 600);
  };

  return (
    <div className="terminal-card">
      {/* Terminal Top Window Bar */}
      <div className="terminal-header">
        <div className="terminal-dots" aria-label="Terminal window controls">
          <span className="dot dot-close" title="Close">
            <X size={7} strokeWidth={2.8} />
          </span>
          <span className="dot dot-minimize" title="Minimize">
            <Minus size={7} strokeWidth={2.8} />
          </span>
          <span className="dot dot-maximize" title="Maximize">
            <Square size={6} strokeWidth={2.8} />
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="terminal-tabs">
          <button
            className={`terminal-tab-btn ${activeTab === 'terminal' ? 'active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            terminal.sh
          </button>
          <button
            className={`terminal-tab-btn ${activeTab === 'architecture' ? 'active' : ''}`}
            onClick={() => setActiveTab('architecture')}
          >
            architecture.ts
          </button>
          <button
            className={`terminal-tab-btn ${activeTab === 'stack' ? 'active' : ''}`}
            onClick={() => setActiveTab('stack')}
          >
            stack.json
          </button>
          <button
            className={`terminal-tab-btn ${activeTab === 'status' ? 'active' : ''}`}
            onClick={() => setActiveTab('status')}
          >
            status.log
          </button>
        </div>

        <button
          className="btn-ghost terminal-copy-btn"
          style={{ padding: '0.2rem 0.4rem', fontSize: '0.75rem' }}
          onClick={() => copyToClipboard('npx richard-dairo --skills')}
          title="Copy command"
        >
          {copied ? <Check size={14} className="copy-check-icon" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="terminal-body">
        {activeTab === 'terminal' && (
          <div>
            <div className="code-line">
              <span className="code-num">1</span>
              <span className="code-comment">// Initializing Richard Dairo's product engine</span>
            </div>
            <div className="code-line">
              <span className="code-num">2</span>
              <span className="code-content">
                <span className="code-keyword">const</span> <span className="code-var">developer</span> <span className="code-op">=</span> <span className="code-keyword">new</span> <span className="code-type">Developer</span><span className="code-bracket">({`{`}</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">3</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">name</span><span className="code-op">:</span> <span className="code-str">"Richard Dairo"</span><span className="code-op">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">4</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">role</span><span className="code-op">:</span> <span className="code-str">"Software Developer & Product Builder"</span><span className="code-op">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">5</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">specialty</span><span className="code-op">:</span> <span className="code-str">"Web Apps, Marketplaces & Payment Gateways"</span><span className="code-op">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">6</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">stack</span><span className="code-op">:</span> <span className="code-bracket">[</span><span className="code-str">"React"</span><span className="code-op">,</span> <span className="code-str">"TypeScript"</span><span className="code-op">,</span> <span className="code-str">"Vanilla CSS"</span><span className="code-op">,</span> <span className="code-str">"Supabase"</span><span className="code-op">,</span> <span className="code-str">"Paystack"</span><span className="code-bracket">]</span><span className="code-op">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">7</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">status</span><span className="code-op">:</span> <span className="code-str">"Available for new projects & opportunities"</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">8</span>
              <span className="code-content"><span className="code-bracket">{`});`}</span></span>
            </div>

            {/* Quick Interactive Command Buttons */}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => runSimulatedCommand('deploy --prod')}
                disabled={isExecuting}
                className="tech-pill accent"
                style={{ cursor: 'pointer' }}
              >
                <Play size={10} /> deploy --prod
              </button>
              <button
                onClick={() => runSimulatedCommand('test --coverage')}
                disabled={isExecuting}
                className="tech-pill"
                style={{ cursor: 'pointer' }}
              >
                <Play size={10} /> test --coverage
              </button>
            </div>

            {/* Dynamic Command Output */}
            {commandOutput.length > 0 && (
              <div className="terminal-output-box">
                {commandOutput.map((line, idx) => (
                  <div
                    key={idx}
                    className={`output-line ${
                      line.startsWith('$') ? 'cmd' : line.startsWith('✓') ? 'success' : line.startsWith('✨') ? 'highlight' : 'dim'
                    }`}
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}

            <div className="terminal-cmd-prompt">
              <span className="prompt-arrow">➜</span>
              <span className="prompt-path">~/omosemola</span>
              <span className="prompt-branch">(main)</span>
              <span className="prompt-dollar">$</span>
              <span className="terminal-cursor"></span>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div>
            <div className="code-line">
              <span className="code-num">1</span>
              <span className="code-keyword">interface</span> <span className="code-type">ProductArchitecture</span> <span className="code-bracket">{`{`}</span>
            </div>
            <div className="code-line">
              <span className="code-num">2</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">presentationLayer</span><span className="code-op">:</span> <span className="code-str">"React 18"</span> <span className="code-op">|</span> <span className="code-str">"TypeScript"</span> <span className="code-op">|</span> <span className="code-str">"Vanilla CSS"</span><span className="code-op">;</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">3</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">databaseEngine</span><span className="code-op">:</span> <span className="code-str">"PostgreSQL + Supabase"</span><span className="code-op">;</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">4</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">securityModel</span><span className="code-op">:</span> <span className="code-str">"Row Level Security (RLS) & JWT"</span><span className="code-op">;</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">5</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">paymentGateways</span><span className="code-op">:</span> <span className="code-bracket">[</span><span className="code-str">"Paystack"</span><span className="code-op">,</span> <span className="code-str">"Flutterwave"</span><span className="code-bracket">]</span><span className="code-op">;</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">6</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">deliveryPipeline</span><span className="code-op">:</span> <span className="code-str">"Vercel Edge & GitHub Actions CI/CD"</span><span className="code-op">;</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">7</span>
              <span className="code-content"><span className="code-bracket">{`}`}</span></span>
            </div>
          </div>
        )}

        {activeTab === 'stack' && (
          <div>
            <div className="code-line">
              <span className="code-num">1</span>
              <span className="code-bracket">{`{`}</span>
            </div>
            <div className="code-line">
              <span className="code-num">2</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">"frontend"</span><span className="code-op">:</span> <span className="code-bracket">[</span><span className="code-str">"React"</span><span className="code-op">,</span> <span className="code-str">"TypeScript"</span><span className="code-op">,</span> <span className="code-str">"Vanilla CSS"</span><span className="code-op">,</span> <span className="code-str">"Next.js"</span><span className="code-bracket">]</span><span className="code-op">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">3</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">"backend"</span><span className="code-op">:</span> <span className="code-bracket">[</span><span className="code-str">"Supabase"</span><span className="code-op">,</span> <span className="code-str">"PostgreSQL"</span><span className="code-op">,</span> <span className="code-str">"REST APIs"</span><span className="code-bracket">]</span><span className="code-op">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">4</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">"fintech"</span><span className="code-op">:</span> <span className="code-bracket">[</span><span className="code-str">"Paystack"</span><span className="code-op">,</span> <span className="code-str">"Flutterwave"</span><span className="code-op">,</span> <span className="code-str">"Webhooks"</span><span className="code-bracket">]</span><span className="code-op">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">5</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">"auth_security"</span><span className="code-op">:</span> <span className="code-bracket">[</span><span className="code-str">"Supabase Auth"</span><span className="code-op">,</span> <span className="code-str">"Google OAuth"</span><span className="code-op">,</span> <span className="code-str">"Postgres RLS"</span><span className="code-bracket">]</span><span className="code-op">,</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">6</span>
              <span className="code-content" style={{ paddingLeft: '1.25rem' }}>
                <span className="code-prop">"devops"</span><span className="code-op">:</span> <span className="code-bracket">[</span><span className="code-str">"Git"</span><span className="code-op">,</span> <span className="code-str">"GitHub Actions"</span><span className="code-op">,</span> <span className="code-str">"Vercel"</span><span className="code-bracket">]</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">7</span>
              <span className="code-bracket">{`}`}</span>
            </div>
          </div>
        )}

        {activeTab === 'status' && (
          <div>
            <div className="code-line">
              <span className="code-num">1</span>
              <span className="code-comment">[2026-08-25 18:00:00 UTC] SYSTEM HEALTH METRICS:</span>
            </div>
            <div className="code-line">
              <span className="code-num">2</span>
              <span className="code-content">
                <span className="code-status-dot green">●</span> <span className="code-prop">PostgreSQL Cluster</span><span className="code-op">:</span> <span className="code-status-ok">CONNECTED</span> <span className="code-comment">(0 errors, 99.99% uptime)</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">3</span>
              <span className="code-content">
                <span className="code-status-dot green">●</span> <span className="code-prop">Supabase RLS Policies</span><span className="code-op">:</span> <span className="code-status-ok">ENFORCED</span> <span className="code-comment">(100% active tables)</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">4</span>
              <span className="code-content">
                <span className="code-status-dot green">●</span> <span className="code-prop">Paystack Webhooks</span><span className="code-op">:</span> <span className="code-status-ok">HEALTHY</span> <span className="code-comment">(signature verified)</span>
              </span>
            </div>
            <div className="code-line">
              <span className="code-num">5</span>
              <span className="code-content">
                <span className="code-status-dot cyan">●</span> <span className="code-prop">Edge Distribution</span><span className="code-op">:</span> <span className="code-status-edge">28 PoPs active</span> <span className="code-comment">(avg latency 18ms)</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
