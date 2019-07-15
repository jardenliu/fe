# CSS 开关

## 预览
<br/>
<css-switch/>

## HTML

```html
<label class="switch">
  <input type="checkbox" checked />
  <span></span>
</label>
```

## CSS

```css
.switch {
  cursor: pointer;
  display: inline-block;
}

.switch input {
  display: none;
}

.switch span {
  background: #dcdfe6;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  border-radius: 20px;
  transition: all 0.3s;
  border: 1px #e8e8e8 solid;
}

.switch span::before {
  content: ' ';
  position: absolute;
  background: #fff;
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  top: 50%;
  transform: translate(1px, -50%);
  transition: all 0.3s;
}

.switch input:checked + span {
  background: #67c23a;
  border-color: #67c23a;
}

.switch input:checked + span::before {
  transform: translate(21px, -50%);
}
```
