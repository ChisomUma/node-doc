import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-DZ52p92N.js";const o={},e=t(`<p>MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage.</p><p>The $lookup stage lets you specify which collection you want to join with the current collection, and which fields should match.</p><p>Consider you have an &quot;orders&quot; collection and a &quot;products&quot; collection:</p><h3 id="orders" tabindex="-1"><a class="header-anchor" href="#orders"><span>orders</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token property">&quot;product_id&quot;</span><span class="token operator">:</span> <span class="token number">154</span><span class="token punctuation">,</span> <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="products" tabindex="-1"><a class="header-anchor" href="#products"><span>products</span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">154</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Chocolate Heaven&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">155</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tasty Lemons&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token number">156</span><span class="token punctuation">,</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vanilla Dreams&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h3><p>Join the matching &quot;products&quot; document(s) to the &quot;orders&quot; collection:</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token keyword">var</span> MongoClient <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>MongoClient<span class="token punctuation">;</span>
<span class="token keyword">var</span> url <span class="token operator">=</span> <span class="token string">&quot;mongodb://127.0.0.1:27017/&quot;</span><span class="token punctuation">;</span>

MongoClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> db</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  <span class="token keyword">var</span> dbo <span class="token operator">=</span> db<span class="token punctuation">.</span><span class="token function">db</span><span class="token punctuation">(</span><span class="token string">&quot;mydb&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dbo<span class="token punctuation">.</span><span class="token function">collection</span><span class="token punctuation">(</span><span class="token string">&#39;orders&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">$lookup</span><span class="token operator">:</span>
       <span class="token punctuation">{</span>
         <span class="token literal-property property">from</span><span class="token operator">:</span> <span class="token string">&#39;products&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">localField</span><span class="token operator">:</span> <span class="token string">&#39;product_id&#39;</span><span class="token punctuation">,</span>
         <span class="token literal-property property">foreignField</span><span class="token operator">:</span> <span class="token string">&#39;_id&#39;</span><span class="token punctuation">,</span>
         <span class="token keyword">as</span><span class="token operator">:</span> <span class="token string">&#39;orderdetails&#39;</span>
       <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    db<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span>Output</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>[
  { &quot;_id&quot;: 1, &quot;product_id&quot;: 154, &quot;status&quot;: 1, &quot;orderdetails&quot;: [
    { &quot;_id&quot;: 154, &quot;name&quot;: &quot;Chocolate Heaven&quot; } ]
  }
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>As you can see from the result above, the matching document from the &quot;products&quot; collection is included in the &quot;orders&quot; collection as an array.</p>`,13),p=[e];function c(i,l){return s(),a("div",null,p)}const d=n(o,[["render",c],["__file","Join.html.vue"]]),k=JSON.parse('{"path":"/docs/MongoDB/Join.html","title":"Join","lang":"en-US","frontmatter":{"title":"Join","index":true,"icon":"object-ungroup","category":["Docs-MongoDB"],"footer":false,"description":"MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage. The $lookup stage lets you specify which collection you want to join with...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/docs/MongoDB/Join.html"}],["meta",{"property":"og:site_name","content":"Node.js Docs"}],["meta",{"property":"og:title","content":"Join"}],["meta",{"property":"og:description","content":"MongoDB is not a relational database, but you can perform a left outer join by using the $lookup stage. The $lookup stage lets you specify which collection you want to join with..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-17T15:40:17.000Z"}],["meta",{"property":"article:author","content":"Aahil"}],["meta",{"property":"article:modified_time","content":"2024-04-17T15:40:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Join\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-04-17T15:40:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Aahil\\",\\"url\\":\\"https://linktr.ee/thecr3ator\\"}]}"]]},"headers":[{"level":3,"title":"orders","slug":"orders","link":"#orders","children":[]},{"level":3,"title":"products","slug":"products","link":"#products","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]},{"level":3,"title":"Output","slug":"output","link":"#output","children":[]}],"git":{"createdTime":1713263701000,"updatedTime":1713368417000,"contributors":[{"name":"Aahil","email":"onyeanunaprince@gmail.com","commits":6}]},"readingTime":{"minutes":0.61,"words":183},"filePathRelative":"docs/MongoDB/Join.md","localizedDate":"April 16, 2024","autoDesc":true}');export{d as comp,k as data};
