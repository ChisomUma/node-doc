import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as s,a}from"./app-DZ52p92N.js";const t={},o=a(`<p>In this tutorial, we&#39;ll explore how Node.js is ideal for building event-driven applications.</p><h2 id="events-in-node-js" tabindex="-1"><a class="header-anchor" href="#events-in-node-js"><span>Events in Node.js</span></a></h2><p>Node.js is well-suited for event-driven applications, where every action on a computer is treated as an event. For example, when a connection is made or a file is opened, these are considered events.</p><p>Objects in Node.js can fire events, such as the <code>readStream</code> object which fires events when opening and closing a file. Let&#39;s see an example:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> rs <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span><span class="token string">&#39;./demofile.txt&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
rs<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;The file is open&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="events-module" tabindex="-1"><a class="header-anchor" href="#events-module"><span>Events Module</span></a></h2><p>Node.js provides a built-in module called &quot;Events&quot; that allows you to create, fire, and listen for your own events.</p><p>To include the built-in Events module, use the <code>require()</code> method. Additionally, all event properties and methods are instances of an EventEmitter object. To access these properties and methods, create an EventEmitter object:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> events <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">events<span class="token punctuation">.</span>EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="the-eventemitter-object" tabindex="-1"><a class="header-anchor" href="#the-eventemitter-object"><span>The EventEmitter Object</span></a></h2><p>You can assign event handlers to your own events using the EventEmitter object. In the following example, we&#39;ve created a function that will be executed when a &quot;scream&quot; event is fired. To fire an event, use the <code>emit()</code> method.</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> events <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;events&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> eventEmitter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">events<span class="token punctuation">.</span>EventEmitter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Create an event handler:</span>
<span class="token keyword">var</span> <span class="token function-variable function">myEventHandler</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;I hear a scream!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Assign the event handler to an event:</span>
eventEmitter<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;scream&#39;</span><span class="token punctuation">,</span> myEventHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Fire the &#39;scream&#39; event:</span>
eventEmitter<span class="token punctuation">.</span><span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;scream&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),i=[o];function p(c,l){return e(),s("div",null,i)}const d=n(t,[["render",p],["__file","Events.html.vue"]]),v=JSON.parse(`{"path":"/docs/Basics/Events.html","title":"Events","lang":"en-US","frontmatter":{"title":"Events","index":true,"icon":"bell","category":["Docs-Basics"],"footer":false,"description":"In this tutorial, we'll explore how Node.js is ideal for building event-driven applications. Events in Node.js Node.js is well-suited for event-driven applications, where every ...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/Basics/Events.html"}],["meta",{"property":"og:site_name","content":"Node.js Docs"}],["meta",{"property":"og:title","content":"Events"}],["meta",{"property":"og:description","content":"In this tutorial, we'll explore how Node.js is ideal for building event-driven applications. Events in Node.js Node.js is well-suited for event-driven applications, where every ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-17T15:40:17.000Z"}],["meta",{"property":"article:author","content":"Aahil"}],["meta",{"property":"article:modified_time","content":"2024-04-17T15:40:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Events\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T15:40:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aahil\\",\\"url\\":\\"https://linktr.ee/thecr3ator\\"}]}"]]},"headers":[{"level":2,"title":"Events in Node.js","slug":"events-in-node-js","link":"#events-in-node-js","children":[]},{"level":2,"title":"Events Module","slug":"events-module","link":"#events-module","children":[]},{"level":2,"title":"The EventEmitter Object","slug":"the-eventemitter-object","link":"#the-eventemitter-object","children":[]}],"git":{"createdTime":1713263632000,"updatedTime":1713368417000,"contributors":[{"name":"Aahil","email":"onyeanunaprince@gmail.com","commits":5}]},"readingTime":{"minutes":0.84,"words":253},"filePathRelative":"docs/Basics/Events.md","localizedDate":"April 16, 2024","autoDesc":true}`);export{d as comp,v as data};
