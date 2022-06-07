(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t)}var n,o;return n=t,o=[{key:"createTodo",value:function(e,t,n,o,r,i){return{title:e,date:t,priority:n,id:o,checked:r,category:i}}},{key:"modifyTodo",value:function(e,t,n,o){var r=this.todoList[e];r.title=t,r.date=n,r.priority=o}},{key:"deleteTodo",value:function(e){this.todoList.splice(e,1)}},{key:"getTitle",value:function(e){return e.title}},{key:"getTodoDay",value:function(e){return e.date.split("-")[2]}},{key:"getTodoMonth",value:function(e){return e.date.split("-")[1].startsWith("0")?e.date.split("-")[1].replace("0",""):e.date.split("-")[1]}},{key:"getTodoYear",value:function(e){return e.date.split("-")[0]}},{key:"getFormattedDate",value:function(e){var t=e.split("-")[0],n=e.split("-")[1],o=e.split("-")[2];return"".concat(o,"/").concat(n,"/").concat(t)}},{key:"inputFormattedDate",value:function(e){var t=e.split("/")[2],n=e.split("/")[1],o=e.split("/")[0];return"".concat(t,"-").concat(n,"-").concat(o)}},{key:"getCheckedList",value:function(e){return!0===e.checked?"checked--list":""}},{key:"getCheckedButton",value:function(e){return!0===e.checked?"checked--btn":""}},{key:"toggleCheck",value:function(e,t){var n=t.dataset.index,o=this.todoList[n];e.classList.toggle("checked--btn"),t.classList.toggle("checked--list"),o.checked=!o.checked}}],null&&e(n.prototype,null),o&&e(n,o),Object.defineProperty(n,"prototype",{writable:!1}),t}();function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}t(n,"todoList",[]),t(n,"getPriority",(function(e){return e.priority})),t(n,"getIndex",(function(e){return e.dataset.index}));var r,i,a,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"initLocalStorage",value:function(){}},{key:"createProject",value:function(e){this.projectList.push(e)}},{key:"deleteProject",value:function(e){this.projectList.splice(e,1)}},{key:"getProjectName",value:function(e){return this.projectList.find((function(t){return t===e}))}}],null&&o(t.prototype,null),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}a=[],(i="projectList")in(r=c)?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a;var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,n=[{key:"storeArray",value:function(e,t){localStorage.setItem(e,this.stringify(t))}},{key:"getArray",value:function(e){return localStorage.getItem(e)}},{key:"modifyArray",value:function(e,t){localStorage.setItem(e,this.stringify(t))}},{key:"clearStorage",value:function(){localStorage.clear()}},{key:"stringify",value:function(e){return JSON.stringify(e)}},{key:"parse",value:function(e){return JSON.parse(e)}}],null&&l(t.prototype,null),n&&l(t,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o;return t=e,o=[{key:"compareDay",value:function(e,t){return e.getDate()==n.getTodoDay(t)&&e.getMonth()==Number(n.getTodoMonth(t))-1&&e.getFullYear()==n.getTodoYear(t)}},{key:"compareMonth",value:function(e,t){return e.getMonth()==Number(n.getTodoMonth(t))-1&&e.getFullYear()==n.getTodoYear(t)}},{key:"compareYear",value:function(e,t){return e==t}}],null&&s(t.prototype,null),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=document.querySelector(".todo-form"),g=document.querySelector(".new-todo"),p=document.getElementById("todo-list"),m=document.getElementById("title"),L=document.getElementById("date"),h=document.getElementById("priority"),k=document.getElementById("create-todo"),j=document.querySelector(".exit--new-todo"),E=document.querySelectorAll(".general"),b=document.getElementById("create-project"),T=document.querySelector(".exit--new-project"),P=document.querySelector(".new-project"),C=document.getElementById("project-list"),w=document.getElementById("project-input"),D=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),v(this,"deleteTodo",!1),v(this,"deleteProject",!1)}var t,o;return t=e,o=[{key:"selectedCategoryEventListener",value:function(){E.forEach((function(t){t.classList.contains(e.generalCategory)?t.classList.add("selected-category"):t.classList.remove("selected-category"),q.hideProjectBtnsSelected()}))}},{key:"todoFormEventListener",value:function(){y.addEventListener("submit",(function(t){t.preventDefault();var o=Math.floor(100*Math.random()),r=e.generalCategory.includes("project")?e.generalCategory.slice(7):"",i=n.createTodo(m.value,L.value,h.value,o,!1,r);n.todoList.push(i),d.modifyArray("todos",n.todoList),q.clearTodoInputFields(),e.toggleNewTodo(),e.renderTodoList()}))}},{key:"exitNewTodoEventListener",value:function(){j.addEventListener("click",e.toggleNewTodo)}},{key:"editTodoEventListener",value:function(){document.addEventListener("click",(function(t){if(t.target.classList.contains("edit")){var n=t.target.closest("li");e.renderModifyTodoForm(n),e.modifiedTodoFormEventListener()}}))}},{key:"deleteTodoEventListener",value:function(){document.addEventListener("click",(function(t){if(t.target.classList.contains("delete-todo")){var n=t.target.closest("div").nextElementSibling;e.hideConfirmsDelete(),q.toggleHidden(n),e.hideConfirmDeleteTodoEventListener(),e.deleteTodo=!0}}))}},{key:"hideConfirmDeleteTodoEventListener",value:function(){document.addEventListener("click",(function(t){var n=t.target.closest("li");!1!==e.deleteTodo&&null===n&&(e.hideConfirmsDelete(),e.deleteTodo=!1)}))}},{key:"hideConfirmsDelete",value:function(){document.querySelectorAll(".delete-request").forEach((function(e){e.classList.contains("hidden")||q.toggleHidden(e)}))}},{key:"confirmDeleteEventListener",value:function(){document.addEventListener("click",(function(t){if(t.target.classList.contains("delete-request")){var o=t.target.closest("li").dataset.index;n.deleteTodo(o),d.modifyArray("todos",n.todoList),e.renderTodoList()}}))}},{key:"modifiedTodoFormEventListener",value:function(){document.querySelector(".modified-todo-form").addEventListener("submit",(function(t){t.preventDefault();var n=t.target.closest("form");e.renderModifiedTodo(n)}))}},{key:"addTodoEventListener",value:function(){k.addEventListener("click",e.toggleNewTodo)}},{key:"toggleNewTodo",value:function(){p.appendChild(g),q.toggleHidden(g)}},{key:"toggleCheckedEventListener",value:function(){document.addEventListener("click",(function(e){if(e.target.classList.contains("check")){var t=e.target,o=e.target.closest("li");n.toggleCheck(t,o),d.modifyArray("todos",n.todoList)}}))}},{key:"dateCategoryEventListener",value:function(){E.forEach((function(t){t.addEventListener("click",(function(t){var n=t.target.classList;n.contains("today")?e.generalCategory="today":n.contains("year")?e.generalCategory="year":n.contains("month")?e.generalCategory="month":e.generalCategory="all",g.classList.contains("hidden")||q.toggleHidden(g),e.selectedCategoryEventListener(),e.renderTodoList()}))}))}},{key:"renderModifyTodoForm",value:function(e){var t=e.childNodes[3].textContent,o=e.childNodes[5].textContent,r=e.classList.value.slice(5),i=e.childNodes[1].classList.contains("checked--btn"),a=n.getIndex(e),c=document.createElement("li"),l='\n    <form class="modified-todo-form '.concat(!0===i?"true":"false",'" data-index="').concat(a,'">\n      <label for="title">Title</label>\n      <input\n        type="text"\n        id="title"\n        name="title"\n        minlength="3"\n        value="').concat(t,'"\n        required\n      />\n      <label for="date">Date</label>\n      <input type="date" id="date" name="date" value="').concat(n.inputFormattedDate(o),'" required />\n      <label for="priority">Priority</label>\n      <select id="priority" name="priority">\n        <option value="high" ').concat(r.includes("high")?"selected":"",'>High</option>\n        <option value="normal" ').concat(r.includes("normal")?"selected":"",'>Normal</option>\n        <option value="low" ').concat(r.includes("low")?"selected":"",">Low</option>\n      </select>\n      <button>OK</button>\n  </form>");c.classList.add("new-todo"),c.insertAdjacentHTML("afterbegin",l),e.closest("#todo-list").replaceChild(c,e)}},{key:"renderModifiedTodo",value:function(e){var t=e.childNodes[3].value,o=e.childNodes[7].value,r=e.childNodes[11].value,i=e.dataset.index,a=e.classList.contains("true");n.modifyTodo(i,t,o,r),d.modifyArray("todos",n.todoList);var c=document.createElement("li"),l='\n          <div class="check '.concat(!0===a?"checked--btn":"",'"></div>\n            <h3>').concat(t,"</h3>\n            <p>").concat(n.getFormattedDate(o),'</p>\n            <div class="span-todo-list">\n              <i class="edit outline icon"></i>\n              <i class="trash delete-todo alternate outline icon"></i>\n            </div>\n            <div class="delete-request hidden"></div>\n    ');c.classList.add("todo"),c.classList.add(r),!0===a&&c.classList.add("checked--list"),c.dataset.index=i,c.insertAdjacentHTML("afterbegin",l),e.closest("#todo-list").replaceChild(c,e.closest("li"))}},{key:"renderTodoList",value:function(){q.clearMainDisplay(),0!==n.todoList.length&&n.todoList.map((function(t,o){if("today"===e.generalCategory?u.compareDay(new Date,t):"month"===e.generalCategory?u.compareMonth(new Date,t):"year"===e.generalCategory?u.compareYear((new Date).getFullYear(),n.getTodoYear(t)):"all"===e.generalCategory)e.renderTodo(t,o);else if(e.generalCategory.includes("project")){var r=e.generalCategory.slice(7);t.category===r&&e.renderTodo(t,o)}}))}},{key:"renderTodo",value:function(e,t){var o='<li class="todo '.concat(n.getPriority(e)," ").concat(n.getCheckedList(e),'" data-index="').concat(t,'">\n                  <div class="check ').concat(n.getCheckedButton(e),'"></div>\n                    <h3>').concat(n.getTitle(e),"</h3>\n                    <p>").concat(n.getFormattedDate(e.date),'</p>\n                    <div class="span-todo-list">\n                      <i class="edit outline icon"></i>\n                      <i class="trash delete-todo alternate outline icon"></i>\n                    </div>\n                    <div class="delete-request hidden"></div>\n                </li>');p.insertAdjacentHTML("beforeend",o)}},{key:"addProjectEventListener",value:function(){b.addEventListener("click",(function(){C.appendChild(P),q.toggleHidden(P)}))}},{key:"exitNewProjectEventListener",value:function(){T.addEventListener("click",(function(e){var t=e.target.closest("li");q.toggleHidden(t)}))}},{key:"deleteProjectEventListener",value:function(){document.addEventListener("click",(function(t){if(t.target.classList.contains("delete-project")){var n=t.target.nextElementSibling;e.hideConfirmsDeleteProject(),q.toggleHidden(t.target),q.toggleHidden(n),e.hideConfirmDeleteProjectEventListener(t.target),e.confirmDeleteProjectEventListener(),e.deleteProject=!0}}))}},{key:"confirmDeleteProjectEventListener",value:function(){document.querySelectorAll(".confirm-delete-project").forEach((function(t){t.addEventListener("click",(function(){var n=t.closest("li").dataset.index;c.deleteProject(n),d.modifyArray("projects",c.projectList),P.classList.contains("hidden")||q.toggleHidden(P),e.renderProjectList()}))}))}},{key:"hideConfirmDeleteProjectEventListener",value:function(t){document.addEventListener("click",(function(t){var n=t.target.closest("li");!1!==e.deleteForm&&null===n&&(e.hideConfirmsDeleteProject(),e.deleteProject=!1)}))}},{key:"hideConfirmsDeleteProject",value:function(){document.querySelectorAll(".confirm-delete-project").forEach((function(e){if(!e.classList.contains("hidden")){var t=e.previousElementSibling;q.toggleHidden(e),t.classList.contains("hidden")&&q.toggleHidden(t)}}))}},{key:"createNewProjectEventListener",value:function(){P.addEventListener("submit",(function(t){t.preventDefault();var n=w.value;c.createProject(n),d.modifyArray("projects",c.projectList),q.clearProjectInputField(),q.toggleHidden(P),e.renderProjectList()}))}},{key:"renderProjectList",value:function(){q.clearProjectDisplay(),0!==c.projectList.length&&c.projectList.map((function(t,n){var o=e.generalCategory.slice(7)===t,r='\n        <li class="project" data-index="'.concat(n,'">\n        <p class="project-name ').concat(o?"selected-project":"",'">').concat(t,'</p>\n        <i class="trash delete-project alternate outline icon"></i>\n        <div class="confirm-delete-project hidden">\n        Delete\n      </div>\n      </li>');C.insertAdjacentHTML("beforeend",r)}))}},{key:"selectProjectCategoryEventListener",value:function(){document.addEventListener("click",(function(t){if(t.target.classList.contains("project-name")){var n=t.target.textContent;e.generalCategory="project"+n,e.selectedProjectEventListener(),e.renderTodoList()}}))}},{key:"selectedProjectEventListener",value:function(){document.querySelectorAll(".project-name").forEach((function(t){var n=e.generalCategory.slice(7);t.textContent===n?t.classList.add("selected-project"):t.classList.remove("selected-project"),q.hideGeneralBtnsSelected()}))}}],null&&f(t.prototype,null),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}v(D,"generalCategory","all");var A=document.getElementById("title"),x=document.getElementById("date"),I=document.getElementById("priority"),N=document.getElementById("todo-list"),M=document.querySelectorAll(".general"),B=document.getElementById("project-input"),H=document.getElementById("project-list"),q=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,o;return t=e,o=[{key:"init",value:function(){e.initStorage(),e.initEventListeners()}},{key:"initStorage",value:function(){e.initLocalStorage(),e.initTodoList(),e.initProjectList(),e.renderStorageLists()}},{key:"initEventListeners",value:function(){D.selectedCategoryEventListener(),D.todoFormEventListener(),D.toggleCheckedEventListener(),D.addTodoEventListener(),D.editTodoEventListener(),D.deleteTodoEventListener(),D.confirmDeleteEventListener(),D.exitNewTodoEventListener(),D.dateCategoryEventListener(),D.addProjectEventListener(),D.deleteProjectEventListener(),D.exitNewProjectEventListener(),D.selectProjectCategoryEventListener(),D.createNewProjectEventListener()}},{key:"initLocalStorage",value:function(){d.getArray("todos")||(d.storeArray("todos",n.todoList),d.storeArray("projects",c.projectList))}},{key:"initTodoList",value:function(){if(d.getArray("todos")){var e=d.getArray("todos");n.todoList=d.parse(e),console.log(n.todoList)}}},{key:"initProjectList",value:function(){if(d.getArray("projects")){var e=d.getArray("projects");c.projectList=d.parse(e),console.log(c.projectList)}}},{key:"renderStorageLists",value:function(){D.renderTodoList(),D.renderProjectList()}},{key:"clearTodoInputFields",value:function(){A.value="",x.value="",I.value="normal"}},{key:"clearProjectInputField",value:function(){B.value=""}},{key:"toggleHidden",value:function(e){e.classList.toggle("hidden")}},{key:"clearMainDisplay",value:function(){N.innerHTML=""}},{key:"clearProjectDisplay",value:function(){H.innerHTML=""}},{key:"hideGeneralBtnsSelected",value:function(){M.forEach((function(e){e.classList.contains("selected-category")&&e.classList.remove("selected-category")}))}},{key:"hideProjectBtnsSelected",value:function(){document.querySelectorAll(".project-name").forEach((function(e){e.classList.contains("selected-project")&&e.classList.remove("selected-project")}))}}],null&&S(t.prototype,null),o&&S(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();q.init()})();