"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const requireAuth_1 = require("../middleware/requireAuth");
const router = (0, express_1.Router)();
router.post('/login', auth_controller_1.loginHandler);
router.get('/profile', requireAuth_1.requireAuth, auth_controller_1.profileHandler);
exports.default = router;
